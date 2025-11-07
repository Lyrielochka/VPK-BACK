import { Request, Response, NextFunction } from "express";
import { DiplomaService } from "../services/diploma.service";

export class DiplomaController {
  private diplomaService: DiplomaService;

  constructor(diplomaService: DiplomaService) {
    this.diplomaService = diplomaService;
  }

  async getDiplomas(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.diplomaService.findDiplomas(req.query);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }

  async getDiplomaById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.diplomaService.findDiplomaById(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }

  async addDiploma(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.diplomaService.createDiploma(req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }

  async updateDiploma(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.diplomaService.updateDiploma(Number(req.params.id), req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }

  async deleteDiploma(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.diplomaService.deleteDiploma(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }
}
