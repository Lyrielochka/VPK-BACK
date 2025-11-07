import { Router } from "express";
import { DiplomaService } from "../services/diploma.service";
import { DiplomaController } from "../conttrollers/diploma.controller";

const router = Router();
const diplomaService = new DiplomaService();
const diplomaController = new DiplomaController(diplomaService);

router.get("/diplomas", diplomaController.getDiplomas.bind(diplomaController));
router.get("/diplomas/:id", diplomaController.getDiplomaById.bind(diplomaController));
router.post("/diplomas", diplomaController.addDiploma.bind(diplomaController));
router.put("/diplomas/:id", diplomaController.updateDiploma.bind(diplomaController));
router.delete("/diplomas/:id", diplomaController.deleteDiploma.bind(diplomaController));

export default router;
