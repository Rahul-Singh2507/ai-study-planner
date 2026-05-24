import express from "express";

import {
  createSubject,
  getSubjects,
  deleteSubject,
} from "../controllers/subject.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createSubject);

router.get("/", authMiddleware, getSubjects);

router.delete("/:id", authMiddleware, deleteSubject);
export default router;