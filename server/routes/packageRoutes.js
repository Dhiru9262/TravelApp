import express from "express";
import {
  createPackage,
  getPackages,
  getPackageById,
  updatePackage,
  deletePackage,
} from "../controllers/packageController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getPackages);
router.get("/:id", getPackageById);

// Admin Routes
router.post("/", protect, admin, createPackage);
router.put("/:id", protect, admin, updatePackage);
router.delete("/:id", protect, admin, deletePackage);

export default router;
