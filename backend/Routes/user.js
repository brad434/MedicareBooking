import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../Controllers/userController.js";

import { authenticate } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", authenticate, getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
