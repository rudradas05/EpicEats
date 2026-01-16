import express from "express";
import {
  getProfile,
  loginUser,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getprofile", authMiddleware, getProfile);
userRouter.post("/updateprofile", authMiddleware, updateProfile);

export default userRouter;
