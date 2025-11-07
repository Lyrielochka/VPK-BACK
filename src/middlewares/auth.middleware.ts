import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { SECRET_KEY } from "../utils/constants";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tokenJswt = req.headers.authorization;
    if (tokenJswt) {
      const result = jwt.verify(tokenJswt.split(" ")[1], SECRET_KEY);
      next();
    } else {
      res.status(401).send("Unauthorazion error");
    }
  } catch {
    res.status(403).send("Forbidden");
  }
};
