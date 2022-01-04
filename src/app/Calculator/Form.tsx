import { useFormik } from "formik";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import { addMeal } from "../../redux/mealSlise";
import { calcCaloriesEnding } from "../../utils/lingvo";
import { prepareValues } from "../../utils/math";
import { CalculatorFormProps, MealsInputValues } from "../../utils/types";
import { handleNumericChange, onKeyPress } from "../../utils/utils";
import { mealsValidationSchema } from "../../utils/validation";
import {
  Flex,
  FormContainer,
  Grid,
  SaveButton,
  Text,
  Title,
} from "./Form.styles";

function Form({ visible }: CalculatorFormProps) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      startWeight: "100",
      protein: "",
      fat: "",
      carb: "",
      weight: 100,
    } as MealsInputValues,
    validationSchema: mealsValidationSchema("create"),
    onSubmit: (values, { resetForm }) => {
      dispatch(addMeal({ ...(values as any), calories }));
      resetForm();
    },
  });

  const { name, startWeight, protein, fat, carb, weight } = formik.values;

  const calories = useMemo(() => prepareValues(formik.values), [formik.values]);

  return (
    <FormContainer onSubmit={formik.handleSubmit} visible={visible}>
      <Input
        formik={formik}
        value={name}
        name="name"
        placeholder="Название продукта"
        handleChange={formik.handleChange}
      />
      <Flex>
        <Text>БЖУ на</Text>
        <Input
          formik={formik}
          value={startWeight}
          name="startWeight"
          placeholder="-Граммы"
          onKeyPress={(evt) => onKeyPress(evt, formik)}
          handleChange={(evt) => handleNumericChange(evt, formik)}
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
          onKeyPress={(evt) => onKeyPress(evt, formik)}
          handleChange={(evt) => handleNumericChange(evt, formik)}
        />
        <Input
          formik={formik}
          value={fat}
          name="fat"
          placeholder="Жиры"
          onKeyPress={(evt) => onKeyPress(evt, formik)}
          handleChange={(evt) => handleNumericChange(evt, formik)}
        />
        <Input
          formik={formik}
          value={carb}
          name="carb"
          placeholder="Углеводы"
          onKeyPress={(evt) => onKeyPress(evt, formik)}
          handleChange={(evt) => handleNumericChange(evt, formik)}
        />
      </Grid>
      <Title>Вес продукта:</Title>
      <Input
        formik={formik}
        value={weight}
        name="weight"
        placeholder="Граммы"
        onKeyPress={(evt) => onKeyPress(evt, formik)}
        handleChange={(evt) => handleNumericChange(evt, formik)}
      />
      <SaveButton
        type="submit"
        aria-label="Добавить запись"
        disabled={!formik.isValid}
      >
        {` Добавить ${
          calories === 0 || Number.isNaN(calories)
            ? `немного килокалорий`
            : `${calories} ${calcCaloriesEnding(calories)}`
        }`}
      </SaveButton>
    </FormContainer>
  );
}

export default Form;
