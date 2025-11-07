import { UserService } from "../services/user.service";
import { UserController } from "../conttrollers/user.controller";
import { Router } from "express";

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.get("/users/", userController.getUser.bind(userController));
router.get("/check/", userController.check.bind(userController));
router.get("/users/:id", userController.getUser.bind(userController));
router.get("/users-with-profiles", userController.getAllUsersWithProfiles.bind(userController));
router.post("/users/", userController.addUser.bind(userController));
router.put("/users/:id", userController.updateUser.bind(userController));
router.delete("/users/:id", userController.deleteUser.bind(userController));

export default router;
