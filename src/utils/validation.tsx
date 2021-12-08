import * as Yup from "yup";

export const validationSchema = Yup.object({
  protein: Yup.number().max(100, "?").positive("?").required("?"),
  fat: Yup.number().max(100, "?").positive("?").required("?"),
  carb: Yup.number().max(100, "?").positive("?").required("?"),
  weight: Yup.number().max(1000, "?").positive("?").required("?"),
});
