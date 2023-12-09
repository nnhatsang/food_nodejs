import express from "express";
import { foodRoutes } from "./foodRoutes.js";
import { resRoutes } from "./resRoutes.js";

const rootRoutes = express.Router();
rootRoutes.use("/food", foodRoutes);
rootRoutes.use("/restaurant", resRoutes);
export default rootRoutes;
