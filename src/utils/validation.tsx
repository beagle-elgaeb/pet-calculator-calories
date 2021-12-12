import * as Yup from "yup";

const schema = Yup.number().max(100, "?").positive("?").required("?");

export const mealsValidationSchema = Yup.object({
  startWeight: Yup.number().max(1000, "?").positive("?").required("?"),
  protein: schema,
  fat: schema,
  carb: schema,
  weight: Yup.number().max(1000, "?").positive("?").required("?"),
});

export const profileValidationSchema = Yup.object({
  name: Yup.string().max(30, "Слишком длинное имя"),
  age: Yup.number().required("?").max(120, "?"),
  stature: Yup.number().required("?").min(30,"?").max(250, "?"),
  weight: Yup.number().required("?").min(4,"?").max(170, "?"),
  sex: Yup.number().required("?"),
  activityLevel: Yup.number().required("?"),
  target: Yup.number().required("?"),
});
