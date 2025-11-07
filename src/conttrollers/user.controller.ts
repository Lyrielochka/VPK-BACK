import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { SECRET_KEY } from "../utils/constants";
import { Profile } from "../entities/profile.entites";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async check(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tokenJwt = req.headers.authorization;
      if (tokenJwt) {
        const decoded: any = jwt.verify(tokenJwt.split(" ")[1], SECRET_KEY);
        const user = await this.userService.findUserById(decoded?.idUser);
        res.status(200).send(user);
      } else {
        res.status(401).send("Unauthorized error");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.userService.findUserById(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }



  async addUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      const profile = new Profile();

      const result = await this.userService.createUser({
        email,
        password,
        role: "user",
        createdAt: new Date(),
        profile,
      });

      res.status(200).send(result);
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      res.status(500).send("Ошибка при регистрации");
    } finally {
      // next();
    }
  }



  async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.userService.deleteUser(Number(req.params.id));
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.userService.updateUser(Number(req.params.id), req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    } finally {
      next();
    }
  }

    async getAllUsersWithProfiles(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsersWithProfiles();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }

}
