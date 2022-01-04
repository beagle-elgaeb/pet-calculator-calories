import * as Yup from "yup";

const schemaPFC = Yup.number()
  // .transform((_, value) => {
  //   if (value.includes(",")) {
  //     console.log(value, value.replace(",", "."));
  //     return value.replace(",", ".");
  //   }
  //   return value;
  // })
  .min(0, "Мало")
  .max(100, "Много")
  .required("Нужно");

export const mealsValidationSchema = (form: "create" | "edit") => {
  return Yup.object({
    name: Yup.string()
      .min(4, "Слишком короткое название")
      .max(100, "Слишком длинное название")
      .required("Название не может быть пустым"),
    startWeight: Yup.number()
      .max(1000, "Многовато")
      .positive("?")
      .required("Нужно"),
    protein: schemaPFC,
    fat: schemaPFC,
    carb: schemaPFC,
    weight: Yup.number().max(1000, "Многовато").positive("?").required("Нужно"),
    ...(form === "edit"
      ? {
          day: Yup.number()
            .min(1, "Нет")
            .required("Нужно")
            .when(["month", "year"], {
              is: (month: number, year: number) =>
                month === new Date().getMonth() + 1 &&
                year === new Date().getFullYear(),
              then: Yup.number().max(new Date().getDate(), "Будущее"),
              otherwise: Yup.number().when("month", {
                is: (month: number) =>
                  month === 1 ||
                  month === 3 ||
                  month === 5 ||
                  month === 7 ||
                  month === 8 ||
                  month === 10 ||
                  month === 12,
                then: Yup.number().max(31, "Нет"),
                otherwise: Yup.number().when("month", {
                  is: (month: number) =>
                    month === 4 || month === 6 || month === 9 || month === 11,
                  then: Yup.number().max(30, "Нет"),
                  otherwise: Yup.number().when("year", {
                    is: (year: number) =>
                      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0,
                    then: Yup.number().max(29, "Нет"),
                    otherwise: Yup.number().max(28, "Нет"),
                  }),
                }),
              }),
            }),
          month: Yup.number()
            .min(1, "Нет")
            .required("Нужно")
            .when("year", {
              is: (year: number) => year === new Date().getFullYear(),
              then: Yup.number().max(new Date().getMonth() + 1, "Будущее"),
              otherwise: Yup.number().max(12, "Нет"),
            }),
          year: Yup.number()
            .min(2019, "?")
            .max(new Date().getFullYear(), "Будущее")
            .required("Нужно"),
        }
      : {}),
  });
};

export const profileValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Слишком короткое имя")
    .max(30, "Слишком длинное имя")
    .required("Имя не может быть пустым"),
  age: Yup.number().min(13, "От 13").max(80, "До 80").required("Нужно"),
  stature: Yup.number().min(100, "Мало").max(300, "Много").required("Нужно"),
  weight: Yup.number().min(40, "Мало").max(300, "Много").required("Нужно"),
  sex: Yup.number().required("?"),
  activityLevel: Yup.number().required("?"),
  target: Yup.number().required("?"),
});
