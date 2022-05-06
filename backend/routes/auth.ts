import express from "express";
import multer from "multer";
import { storage } from "../config/cloudinaryConfig";
import { jwtLogInController, jwtSignUpController } from "../controllers/auth";

const upload = multer({ storage });
const router = express.Router();

router.post("/signup", upload.single("image"), jwtSignUpController);
router.post("/login", jwtLogInController);

export default router;
