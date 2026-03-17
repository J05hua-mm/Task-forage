import { Router } from "express";
import { authenticate } from "../middleware/auth";
import {
  createProject,
  getProject,
  deleteProject
} from "../controllers/projectController";

const router = Router();

router.post("/", authenticate, createProject);
router.get("/", authenticate, getProject);
router.delete("/:id", authenticate, deleteProject);

export default router;