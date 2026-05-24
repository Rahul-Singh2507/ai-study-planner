import express from "express";
console.log("planner route loaded");
import authMiddleware from "../middlewares/auth.middleware.js";

import { createStudyPlan } from "../controllers/planner.controller.js";

const router = express.Router();

router.get("/", authMiddleware, createStudyPlan);

export default router;