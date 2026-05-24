import Subject from "../models/subject.model.js";

export const createSubject = async (req, res) => {
  try {
    const { title, examDate, difficulty } = req.body;

    const subject = await Subject.create({
      title,
      examDate,
      difficulty,
      user: req.user._id,
    });

    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find({
      user: req.user._id,
    });

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);

    if (!subject) {
      return res.status(404).json({
        message: "Subject not found",
      });
    }

    await subject.deleteOne();

    res.status(200).json({
      message: "Subject deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};