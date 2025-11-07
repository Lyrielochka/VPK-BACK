import { Request, Response, NextFunction } from "express";
import { ProfileService } from "../services/profile.service";

export class ProfileController {
  private profileService: ProfileService;

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  async getProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.profileService.findProfileById(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      // next();
    }
  }

  async getProfileByUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.profileService.findProfileByUser(Number(req.params.idUser));
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      // next();
    }
  }

  async getProfiles(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.profileService.findProfiles(req.query);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      // next();
    }
  }

  async addProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.profileService.createProfile(req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      // next();
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.profileService.updateProfile(Number(req.params.id), req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      // next();
    }
  }

  async deleteProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.profileService.deleteProfile(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      // next();
    }
  }
}
