import { Router } from "express";
import { ProfileService } from "../services/profile.service";
import { ProfileController } from "../conttrollers/profile.controller";

const router = Router();
const profileService = new ProfileService();
const profileController = new ProfileController(profileService);

router.get("/profiles", profileController.getProfiles.bind(profileController));
router.get("/profiles/:id", profileController.getProfile.bind(profileController));
router.get("/profiles/user/:idUser", profileController.getProfileByUser.bind(profileController));
router.post("/profiles", profileController.addProfile.bind(profileController));
router.put("/profiles/:id", profileController.updateProfile.bind(profileController));
router.delete("/profiles/:id", profileController.deleteProfile.bind(profileController));

export default router;
