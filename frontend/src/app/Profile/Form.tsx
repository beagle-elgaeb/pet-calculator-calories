import { useFormik } from "formik";
import { useContext } from "react";
import * as api from "../../api/api";
import Input from "../../components/Input";
import InputSelect from "../../components/InputSelect";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { calcAllMetabolism, calcMetabolism } from "../../utils/math";
import {
  optionsActivity,
  optionsSex,
  optionsTarget,
} from "../../utils/optionsLists";
import { ProfileFormProps, ProfileInputValues } from "../../utils/types";
import { onKeyPressProfile } from "../../utils/utils";
import { profileValidationSchema } from "../../utils/validation";
import {
  Buttons,
  FormContainer,
  Inputs,
  LinkToProfile,
  Result,
  Results,
  ResultTitle,
  ResultUnit,
  SaveButton,
  Title,
} from "./Form.styles";

function Form({ setEditedForm, loadProfile }: ProfileFormProps) {
  const data = useContext(CurrentUserContext)!;

  const formik = useFormik({
    initialValues: {
      age: data.age ? String(data.age) : "",
      stature: data.stature ? String(data.stature) : "",
      weight: data.weight ? String(data.weight) : "",
      sex: data.sex,
      activityLevel: data.activityLevel,
      target: data.target,
    } as ProfileInputValues,
    enableReinitialize: true,
    validationSchema: profileValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      await api.editCalcProfileData({
        age: Number(age),
        stature: Number(stature),
        weight: Number(weight),
        sex,
        activityLevel,
        target,
      });
      // dispatch(saveProfile({ ...values, baseMetabolism, targetMetabolism }));

      await loadProfile();
      setEditedForm(false);
      resetForm();
    },
  });

  const { age, stature, weight, sex, activityLevel, target } = formik.values;

  const keys = Object.keys(formik.values) as (keyof typeof formik.values)[];

  const { baseMetabolism, activeMetabolism } = calcMetabolism({
    age: Number(age),
    stature: Number(stature),
    weight: Number(weight),
    sex,
    activityLevel,
    target,
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Title>Введите данные чтобы рассчитать дневную норму калорийности</Title>
      <Inputs>
        <Input
          formik={formik}
          value={age}
          name="age"
          placeholder="Возраст"
          onKeyPress={onKeyPressProfile}
          handleChange={formik.handleChange}
        />
        <Input
          formik={formik}
          value={stature}
          name="stature"
          placeholder="Рост в см"
          onKeyPress={onKeyPressProfile}
          handleChange={formik.handleChange}
        />
        <Input
          formik={formik}
          value={weight}
          name="weight"
          placeholder="Вес в кг"
          onKeyPress={onKeyPressProfile}
          handleChange={formik.handleChange}
        />
      </Inputs>
      <InputSelect
        formik={formik}
        value={!sex ? "" : optionsSex.find((o) => o.value === sex)!.text}
        options={optionsSex}
        name="sex"
        placeholder="Пол"
      />
      <InputSelect
        formik={formik}
        value={
          !activityLevel
            ? ""
            : optionsActivity.find((o) => o.value === activityLevel)!.span
        }
        options={optionsActivity}
        name="activityLevel"
        placeholder="Уровень активности"
      />
      <InputSelect
        formik={formik}
        value={
          !target ? "" : optionsTarget.find((o) => o.value === target)!.text
        }
        options={optionsTarget}
        name="target"
        placeholder="Цель"
      />
      <Title>Результаты рассчёта:</Title>
      <Results>
        <ResultTitle>Базовый метаболизм:</ResultTitle>
        <Result>{baseMetabolism}</Result>
        <ResultUnit>ккал</ResultUnit>
        <ResultTitle>С учётом активности:</ResultTitle>
        <Result>{activeMetabolism}</Result>
        <ResultUnit>ккал</ResultUnit>
        <ResultTitle>Для быстрого ↓ веса:</ResultTitle>
        <Result>{calcAllMetabolism(0.8, activeMetabolism)}</Result>
        <ResultUnit>ккал</ResultUnit>
        <ResultTitle>Для снижения веса:</ResultTitle>
        <Result>{calcAllMetabolism(0.9, activeMetabolism)}</Result>
        <ResultUnit>ккал</ResultUnit>
        <ResultTitle>Для набора веса:</ResultTitle>
        <Result>{calcAllMetabolism(1.1, activeMetabolism)}</Result>
        <ResultUnit>ккал</ResultUnit>
        <ResultTitle>Для быстрого ↑ веса:</ResultTitle>
        <Result>{calcAllMetabolism(1.2, activeMetabolism)}</Result>
        <ResultUnit>ккал</ResultUnit>
      </Results>
      <Buttons>
        <LinkToProfile to="/profile" onClick={() => setEditedForm(false)}>
          Отмена
        </LinkToProfile>

        <SaveButton
          type="submit"
          aria-label="Сохраниять изменение"
          disabled={
            !formik.isValid ||
            keys.every((key) => formik.values[key] === data[key])
          }
          inActive={!formik.isValid}
        >
          Сохранить
        </SaveButton>
      </Buttons>
    </FormContainer>
  );
}

export default Form;
