import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { SECRET_KEY, STATUS_CODE } from "../utils/constants";

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async loginUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await this.authService.login(req.body);
      if (result) {
        res.status(STATUS_CODE.OK).json({
          email: result.email,
          token: jwt.sign(
            { idUser: result.idUser, email: result.email },
            SECRET_KEY,
            { expiresIn: "20m" }
          ),
          role: result.role,
          user: result,
        });
      } else {
        res.status(STATUS_CODE.NOT_FOUND).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(STATUS_CODE.SERVER_ERROR).json(error);
    } finally {
      next();
    }
  }
  

  async registerUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { email, password } = req.body;
    const role = 'user';

    const existing = await this.authService.findByEmail(email);
    if (existing) {
      res.status(400).json({ message: 'Пользователь уже существует' });
      return;
    }

    const newUser = await this.authService.register({ email, password, role });

    const token = jwt.sign(
      { idUser: newUser.idUser, email: newUser.email },
      SECRET_KEY,
      { expiresIn: '30d' }
    );

    res.status(200).json({
      email: newUser.email,
      token,
      role: newUser.role,
      user: newUser
    });
  } catch (error) {
  console.error("Ошибка при регистрации:", error);
  res.status(500).json({ message: "Ошибка сервера при регистрации" });
}
 finally {
    // next();
  }
}

}
