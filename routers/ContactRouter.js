import { Router } from "express";
import ContactController from "../controllers/ContactController.js";
const router = Router();

router.get("/api/get", ContactController.GetAllContact);

export default router;
