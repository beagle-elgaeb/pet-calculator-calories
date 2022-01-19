import { celebrate, Joi } from "celebrate";

export const validateNewUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
});

export const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

export const validateEditedPassword = celebrate({
  body: Joi.object().keys({
    password: Joi.string().required().min(8),
  }),
});

export const validateEditedUserData = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    name: Joi.string().min(2).max(30),
    age: Joi.number().min(13).max(80),
    stature: Joi.number().min(100).max(300),
    weight: Joi.number().min(40).max(300),
    sex: Joi.number().allow(7, 12),
    activityLevel: Joi.number().allow(
      1,
      1.2,
      1.375,
      1.4625,
      1.55,
      1.6375,
      1.725,
      1.9
    ),
    target: Joi.number().allow(0.8, 0.9, 1, 1.1, 1.2),
  }),
});

export const validateAddedMeal = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(4).max(100),
    protein: Joi.number().required(),
    fat: Joi.number().required(),
    carb: Joi.number().required(),
    weight: Joi.number().required(),
  }),
});

export const validateEditedMeal = celebrate({
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object().keys({
    date: Joi.string(),
    name: Joi.string().min(4).max(100),
    protein: Joi.number(),
    fat: Joi.number(),
    carb: Joi.number(),
    weight: Joi.number(),
  }),
});

export const validateMealId = celebrate({
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
});
