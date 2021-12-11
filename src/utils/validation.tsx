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
  name: Yup.string().required("?").max(30, "Слишком длинное имя"),
  age: Yup.string().required("?"),
  stature: Yup.string().required("?"),
  weight: Yup.string().required("?"),
  sex: Yup.string().required("?"),
  activityLevel: Yup.string().required("?"),
});
