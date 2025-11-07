import { Router } from "express";
import { AuthService } from "../services/auth.service";
import { AuthController } from "../conttrollers/auth.controller";

const router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

router.post("/login", authController.loginUser.bind(authController));
router.post("/register", authController.registerUser.bind(authController));

export default router;
