import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config";
import {
  authorizationCompleted,
  authorizationError,
  incorrectData,
} from "../constants";
import BadRequestError from "../errors/BadRequestErr";
import Unauthorized from "../errors/UnauthorizedErr";
import { User } from "../models/user";

const { NODE_ENV } = process.env;

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.query().insert({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    if (!user) {
      throw new BadRequestError(incorrectData);
    }

    res.send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (err: any) {
    next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findUserByCredentials(
      req.body.email,
      req.body.password
    );

    if (!user) {
      throw new Unauthorized(authorizationError);
    }

    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "7d" });

    res
      .cookie(
        "jwt",
        token,
        NODE_ENV === "production"
          ? {
              secure: true,
              sameSite: "none",
              httpOnly: true,
              maxAge: 7 * 24 * 3600 * 1000,
            }
          : {}
      )
      .send({ message: authorizationCompleted });
  } catch (err: any) {
    next(err);
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("jwt").send({ message: "Выход удался" });
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await User.query().deleteById(req.user.id);

    res.clearCookie("jwt").send("Пользователь удалён");
  } catch (err: any) {
    next(err);
  }
};
