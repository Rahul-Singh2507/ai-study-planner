import Subject from "../models/subject.model.js";

import { generateStudyPlan } from "../services/ai.service.js";

export const createStudyPlan = async (req, res) => {
     console.log("planner controller hit");
  try {
    const subjects = await Subject.find({
      user: req.user._id,
    });

    const formattedSubjects = subjects.map((subject) => {
      return `
      Subject: ${subject.title}
      Exam Date: ${subject.examDate}
      Difficulty: ${subject.difficulty}
      `;
    });
console.log("before ai call");
    const prompt = `
    Create a smart 7-day study timetable for these subjects:

    ${formattedSubjects.join("\n")}

    Include:
    - Daily schedule
    - Revision time
    - Priority subjects
    - Break recommendations
    `;

    const response = await generateStudyPlan(prompt);

    res.status(200).json({
      success: true,
      studyPlan: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};