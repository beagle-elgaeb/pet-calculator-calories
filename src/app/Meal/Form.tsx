import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import Input from "../../components/Input";
import { editMeal } from "../../redux/mealSlise";
import { prepareValues } from "../../utils/math";
import { MealFormProps } from "../../utils/types";
import { handleNumericChange, onKeyPress } from "../../utils/utils";
import { mealsValidationSchema } from "../../utils/validation";
import { Flex, FormContainer, Grid, SaveButton, Text } from "./Form.style";

function Form({ data, setEditedForm, onClose }: MealFormProps) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: data?.name!,
      startWeight: "100",
      protein: String(
        Math.round(
          (Number(data?.protein!) * 100 * 100) / Number(data?.weight!)
        ) / 100
      ),
      fat: String(
        Math.round((Number(data?.fat!) * 100 * 100) / Number(data?.weight!)) /
          100
      ),
      carb: String(
        Math.round((Number(data?.carb!) * 100 * 100) / Number(data?.weight!)) /
          100
      ),
      weight: data?.weight!,
      day: String(new Date(data?.timestamp!).getDate()),
      month: String(new Date(data?.timestamp!).getMonth() + 1),
      year: String(new Date(data?.timestamp!).getFullYear()),
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
      <Input
        formik={formik}
        value={weight}
        name="weight"
        placeholder="Граммы"
        onKeyPress={(evt) => onKeyPress(evt, formik)}
        handleChange={(evt) => handleNumericChange(evt, formik)}
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
          onKeyPress={(evt) => onKeyPress(evt, formik)}
          handleChange={formik.handleChange}
        />
        <Input
          formik={formik}
          value={month}
          name="month"
          placeholder="Месяц"
          onKeyPress={(evt) => onKeyPress(evt, formik)}
          handleChange={formik.handleChange}
        />
        <Input
          formik={formik}
          value={year}
          name="year"
          placeholder="Год"
          onKeyPress={(evt) => onKeyPress(evt, formik)}
          handleChange={formik.handleChange}
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
