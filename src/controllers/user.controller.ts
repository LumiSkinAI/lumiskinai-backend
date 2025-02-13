import express, { Request, Response } from "express";
import * as userService from "../services/user.service";

const userRouter = express.Router();

// API lấy thông tin tất cả người dùng
export const findAll = async (req: Request, res: Response) => {
  try {
      //lấy dữ liệu bên trong servivce
    const users = await userService.findAll()

    // Trả kết quả
    return res.status(200).json({
      status: 200,
      message: "thành công",
      data: users,
    });
  } catch (error) {
      return res.status(500).json({
          message: error,
      });
  }
};
