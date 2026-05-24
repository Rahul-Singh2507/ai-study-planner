import { useState } from "react"
import { Link } from "react-router-dom"

import { loginUser } from "../api/api"

const Login = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 const handleLogin = async (e) => {

  e.preventDefault()

  try {

    const response = await loginUser({
      email,
      password,
    })

    localStorage.setItem("token", response.token)

window.location.href = "/dashboard"

  } catch (error) {

    console.log(error)
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 px-4">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-gray-300 text-center mt-2 mb-8">
          Login to continue your study journey
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full p-3 rounded-xl bg-white/10 border border-white/10 outline-none text-white placeholder-gray-400 focus:border-purple-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full p-3 rounded-xl bg-white/10 border border-white/10 outline-none text-white placeholder-gray-400 focus:border-purple-400"
            />
          </div>

          <button
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-xl transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-purple-400 hover:text-purple-300"
          >
            Register
          </Link>

        </p>
      </div>
    </div>
  )
}

export default Login