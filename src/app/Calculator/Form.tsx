import { useFormik } from "formik";
import { KeyboardEvent, useMemo } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import { addMeal } from "../../redux/mealSlise";
import { calcCaloriesEnding } from "../../utils/lingvo";
import { prepareValues } from "../../utils/math";
import { MealsInputValues, ValidatedValues } from "../../utils/types";
import { mealsValidationSchema } from "../../utils/validation";
import {
  Flex,
  FormContainer,
  Grid,
  SaveButton,
  Text,
  Title,
} from "./Form.styles";

function Form() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      startWeight: 100,
      protein: "",
      fat: "",
      carb: "",
      weight: 100,
    } as MealsInputValues,
    validationSchema: mealsValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addMeal({ ...(values as ValidatedValues), calories }));
      resetForm();
    },
  });

  const { startWeight, protein, fat, carb, weight } = formik.values;

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
      <Flex>
        <Text>БЖУ на</Text>
        <Input
          formik={formik}
          value={startWeight}
          name="startWeight"
          placeholder="Граммы"
          type={"number"}
          onKeyPress={onKeyPress}
          onFocus={() => formik.setFieldValue("startWeight", "")}
          startWeight={true}
        />
        <Text>грамм</Text>
      </Flex>

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
            : `${calories} ${calcCaloriesEnding(calories)}`
        }`}
      </SaveButton>
    </FormContainer>
  );
}

export default Form;
