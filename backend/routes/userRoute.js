import express from "express";
import {
  getProfile,
  loginUser,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";
import authUser from "../middleware/authUser.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/getprofile", authUser, getProfile);
userRouter.post("/updateprofile", authUser, updateProfile);

export default userRouter;
