import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    examDate: {
      type: Date,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const subjectModel = mongoose.model("Subject", subjectSchema);

export default subjectModel;