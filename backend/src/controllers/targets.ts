import { NextFunction, Request, Response } from "express";
import { Target } from "../models/target";

export const getTargets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const targets = await Target.query().where("ownerId", req.user.id);

    res.send(targets);
  } catch (err) {
    next(err);
  }
};
