import express from "express";
import {
  getUserOrders,
  getlistUserLikeRes,
  placeOrder,
} from "../Controllers/userController.js";

export const userRoutes = express.Router();

userRoutes.get("/liked-res/:user_id", getlistUserLikeRes);
userRoutes.get("/order/:user_id", getUserOrders);
userRoutes.post("/order", placeOrder);
