import express from "express";
import {
  blockUsers,
  deleteUsers,
  getUsers,
  loginUser,
  registerUser,
  unBlockUsers,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getUsers);
router.put("/block", verifyToken, blockUsers);
router.put("/unblock", verifyToken, unBlockUsers);
router.delete("/delete", verifyToken, deleteUsers);

export default router;
