import express from "express";
import { getCountLikeByRes, getResId, gettRes } from "../Controllers/resController.js";
export const resRoutes = express.Router();

resRoutes.get("/get-res", gettRes);
resRoutes.get("/get-res-by-id/:res_id", getResId);
resRoutes.get("/count-like-by-res/:res_id", getCountLikeByRes);
