import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const generateStudyPlan = async (prompt) => {

  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],

    model: "llama-3.1-8b-instant",
  });

  return response.choices[0].message.content;
};