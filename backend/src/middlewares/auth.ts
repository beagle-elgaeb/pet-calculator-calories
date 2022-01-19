import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config";
import { needToLogin } from "../constants";
import Unauthorized from "../errors/UnauthorizedErr";
import { User } from "../models/user";

export default (req: Request, res: Response, next: NextFunction) => {
  const biscuit = req.cookies.jwt;

  if (!biscuit) {
    throw new Unauthorized(needToLogin);
  }

  let payload;

  try {
    payload = jwt.verify(biscuit, jwtSecret);
  } catch (err) {
    throw new Unauthorized(needToLogin);
  }

  req.user = payload as User;

  next();
};

declare global {
  namespace Express {
    export interface Request {
      user: User;
    }
  }
}
