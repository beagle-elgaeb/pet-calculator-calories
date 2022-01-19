import { NextFunction, Request, Response } from "express";
import { incorrectData, invalidId } from "../constants";
import BadRequestError from "../errors/BadRequestErr";
import { Meal } from "../models/meal";

export const getMeals = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const meals = await Meal.query().where("ownerId", req.user.id);

    res.send(meals);
  } catch (err) {
    next(err);
  }
};

export const addMeal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const mealAdded = await Meal.query().insert({
      ...req.body,
      ownerId: req.user.id,
    });

    if (!mealAdded) {
      throw new BadRequestError(incorrectData);
    }

    res.send(mealAdded);
  } catch (err: any) {
    next(err);
  }
};

export const editMeal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const mealEdited = await Meal.query()
      .where("ownerId", req.user.id)
      .patchAndFetchById(req.params.id, req.body);

    if (!mealEdited) {
      throw new BadRequestError(incorrectData);
    }

    res.send(mealEdited);
  } catch (err: any) {
    next(err);
  }
};

export const deleteMeal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Meal.query().where("ownerId", req.user.id).deleteById(req.params.id);

    res.send("Приём пищи удалён");
  } catch (err: any) {
    next(err);
  }
};
