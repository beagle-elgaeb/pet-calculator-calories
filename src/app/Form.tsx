import { useFormik } from "formik";
import { KeyboardEvent, useMemo } from "react";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import { addMeal } from "../redux/mealSlise";
import { calcWordEnding, prepareValues } from "../utils/math";
import { InputValues, ValidatedValues } from "../utils/types";
import { mealsValidationSchema } from "../utils/validation";
import { FormContainer, Grid, SaveButton, Title } from "./Form.styles";

function Form() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      protein: "",
      fat: "",
      carb: "",
      weight: 100,
    } as InputValues,
    validationSchema: mealsValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addMeal({ ...(values as ValidatedValues), calories }));
      resetForm();
    },
  });

  const { protein, fat, carb, weight } = formik.values;

  const calories = useMemo(() => prepareValues(formik.values), [formik.values]);

  function onKeyPress(evt: KeyboardEvent<HTMLInputElement>) {
    if (
      evt.key === "-" ||
      Number(evt.currentTarget.value) > 99.99 ||
      (evt.currentTarget.value === "0" && /^[0]/.test(evt.key))
    ) {
      evt.preventDefault();
    }
  }

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Title>БЖУ на 100 грамм:</Title>
      <Grid>
        <Input
          formik={formik}
          value={protein}
          name="protein"
          placeholder="Белки"
          type={"number"}
          onKeyPress={onKeyPress}
          onFocus={() => formik.setFieldValue("protein", "")}
        />
        <Input
          formik={formik}
          value={fat}
          name="fat"
          placeholder="Жиры"
          type={"number"}
          onKeyPress={onKeyPress}
          onFocus={() => formik.setFieldValue("fat", "")}
        />
        <Input
          formik={formik}
          value={carb}
          name="carb"
          placeholder="Углеводы"
          type={"number"}
          onKeyPress={onKeyPress}
          onFocus={() => formik.setFieldValue("carb", "")}
        />
      </Grid>
      <Title>Вес продукта:</Title>
      <Input
        formik={formik}
        value={weight}
        name="weight"
        placeholder="Граммы"
        type={"number"}
        onKeyPress={onKeyPress}
        onFocus={() => formik.setFieldValue("weight", "")}
      />
      <SaveButton
        type="submit"
        aria-label="Добавить запись"
        disabled={!formik.isValid}
      >
        {` Добавить ${
          calories === 0
            ? `немного килокалорий`
            : `${calories} ${calcWordEnding(calories)}`
        }`}
      </SaveButton>
    </FormContainer>
  );
}

export default Form;
