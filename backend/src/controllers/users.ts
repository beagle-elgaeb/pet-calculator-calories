import { NextFunction, Request, Response } from "express";
import { incorrectData } from "../constants";
import BadRequestError from "../errors/bad-request-err";
import { Target } from "../models/target";
import { User } from "../models/user";
import { calctargetMetabolism } from "../utils/math";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.query().findById(req.user.id);

    res.send(user);
  } catch (err: any) {
    next(err);
  }
};

export const editUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userEdited = await User.query().patchAndFetchById(
      req.user.id,
      req.body
    );

    const user = await User.query().findById(req.user.id);

    if (!user) {
      throw new BadRequestError(incorrectData);
    }

    const { age, stature, weight, sex, activityLevel, target } = user;

    const targetAdded = await Target.query().insert({
      targetMetabolism: calctargetMetabolism({
        age,
        stature,
        weight,
        sex,
        activityLevel,
        target,
      }),
      ownerId: req.user.id,
    });

    if (!userEdited) {
      throw new BadRequestError(incorrectData);
    }

    res.send({ userEdited, targetAdded });
  } catch (err: any) {
    next(err);
  }
};

export const editPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userEdited = await User.query().patchAndFetchById(
      req.user.id,
      req.body
    );

    if (!userEdited) {
      throw new BadRequestError(incorrectData);
    }

    res.send("Пароль успешно изменён");
  } catch (err: any) {
    next(err);
  }
};
