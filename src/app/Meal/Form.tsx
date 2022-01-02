import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import { editMeal } from "../../redux/mealSlise";
import { prepareValues } from "../../utils/math";
import { MealFormProps } from "../../utils/types";
import { onKeyPress } from "../../utils/utils";
import { mealsValidationSchema } from "../../utils/validation";
import { Flex, FormContainer, Grid, SaveButton, Text } from "./Form.style";

function Form({ data, setEditedForm, onClose }: MealFormProps) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: data?.name!,
      startWeight: 100,
      protein: Math.round((data?.protein! * 100 * 100) / data?.weight!) / 100,
      fat: Math.round((data?.fat! * 100 * 100) / data?.weight!) / 100,
      carb: Math.round((data?.carb! * 100 * 100) / data?.weight!) / 100,
      weight: data?.weight!,
      day: new Date(data?.timestamp!).getDate(),
      month: new Date(data?.timestamp!).getMonth() + 1,
      year: new Date(data?.timestamp!).getFullYear(),
    },
    enableReinitialize: true,
    validationSchema: mealsValidationSchema("edit"),
    onSubmit: (values, { resetForm }) => {
      dispatch(
        editMeal({ ...values, id: data!.id, calories, day, month, year })
      );
      onClose();
      setEditedForm(false);
      resetForm();
    },
  });

  const { name, startWeight, protein, fat, carb, weight, day, month, year } =
    formik.values;

  const calories = prepareValues(formik.values);

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Input
        formik={formik}
        value={name}
        name="name"
        placeholder="Название"
        type={"text"}
      />
      <Flex>
        <Text>БЖУ на</Text>
        <Input
          formik={formik}
          value={startWeight}
          name="startWeight"
          placeholder="-Граммы"
          type={"number"}
          onKeyPress={(evt) => onKeyPress(evt, formik)}
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
          onKeyPress={(evt) => onKeyPress(evt, formik)}
        />
        <Input
          formik={formik}
          value={fat}
          name="fat"
          placeholder="Жиры"
          type={"number"}
          onKeyPress={(evt) => onKeyPress(evt, formik)}
        />
        <Input
          formik={formik}
          value={carb}
          name="carb"
          placeholder="Углеводы"
          type={"number"}
          onKeyPress={(evt) => onKeyPress(evt, formik)}
        />
      </Grid>
      <Input
        formik={formik}
        value={weight}
        name="weight"
        placeholder="Граммы"
        type={"number"}
        onKeyPress={(evt) => onKeyPress(evt, formik)}
      />
      <Flex>
        <Text>Дата:</Text>
      </Flex>
      <Grid>
        <Input
          formik={formik}
          value={day}
          name="day"
          placeholder="День"
          type={"number"}
          onKeyPress={(evt) => onKeyPress(evt, formik)}
        />
        <Input
          formik={formik}
          value={month}
          name="month"
          placeholder="Месяц"
          type={"number"}
          onKeyPress={(evt) => onKeyPress(evt, formik)}
        />
        <Input
          formik={formik}
          value={year}
          name="year"
          placeholder="Год"
          type={"number"}
          onKeyPress={(evt) => onKeyPress(evt, formik)}
        />
      </Grid>
      <SaveButton
        type="submit"
        aria-label="Сохранить изменение"
        disabled={!formik.isValid}
      >
        Сохранить изменение
      </SaveButton>
    </FormContainer>
  );
}

export default Form;
