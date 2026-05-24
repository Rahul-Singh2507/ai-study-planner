import userModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export async function registerController(req, res) {
    const { email, username, password } = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserAlreadyExists) {
        return res.status(409)
            .json({
                message: "User already exists " + (isUserAlreadyExists.email == email ? "Email already exists" : "Username already exists")
            })
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await userModel.create({
        username,
        email,
        password: hash,
    })

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token)

   res.status(201).json({
    message: "User Registered successfully",
    token,
    user: {
        email: user.email,
        username: user.username,
    }
})


}

export async function loginController(req, res) {
    const { username, email, password } = req.body

    /**
     * username
     * password
     * 
     * email
     * password
     */

    /**
     * { username:undefined,email:test@test.com,password:test } = req.body
     */

    const user = await userModel.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            }
        ]
    })

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "password invalid"
        })
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token)


    res.status(200)
        .json({
            message: "User loggedIn successfully.",
            token: token,
            user: {
                username: user.username,
                email: user.email,
            }
        })
}

