import { Router } from "express";
import ContactController from "../controllers/ContactController.js";
const router = Router();


router.post("/api/post", ContactController.AddContact);
router.get("/api/get", ContactController.GetAllContact);
router.get("/api/singleget/:id", ContactController.SingleContact);
router.put("/api/update", ContactController.UpdateContact);


router.post("/api/post", ContactController.AddContact);

router.get("/api/get", ContactController.GetAllContact);


export default router;
