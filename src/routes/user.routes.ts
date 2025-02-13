import express from "express";
import { Router, Response, request } from "express";  // Import Router từ express
import { findAll } from "../controllers/user.controller";

const userRouter = express.Router();  // Tạo một instance của Router

userRouter.get("/", findAll);
export default userRouter;
