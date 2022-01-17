import { NextFunction, Request, Response } from "express";
import { serverCannot } from "../constants";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? serverCannot : message,
  });

  next();
};
