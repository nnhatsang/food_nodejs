import express from "express";
import { foodRoutes } from "./foodRoutes.js";
import { resRoutes } from "./resRoutes.js";
import { userRoutes } from "./userRoutes.js";

const rootRoutes = express.Router();
rootRoutes.use("/food", foodRoutes);
rootRoutes.use("/restaurant", resRoutes);
rootRoutes.use("/user", userRoutes);
export default rootRoutes;
