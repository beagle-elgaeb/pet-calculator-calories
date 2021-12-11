import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input";
import InputSelect from "../../components/InputSelect";
import { saveProfile } from "../../redux/profileSlise";
import { State } from "../../redux/types";
import { calcAllMetabolism, calcMetabolism } from "../../utils/math";
import {
  optionsActivity,
  optionsPurpose,
  optionsSex,
} from "../../utils/optionsLists";
import { ProfileInputValues } from "../../utils/types";
import { profileValidationSchema } from "../../utils/validation";
import {
  Inputs,
  ProfileContainer,
  ProfileForm,
  Result,
  Results,
  ResultTitle,
  ResultUnit,
  SaveButton,
  Title,
} from "./Profile.styles";

function Profile() {
  const dispatch = useDispatch();
  const data = useSelector((state: State) => state.profile);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data.name,
      age: data.age,
      stature: data.stature,
      weight: data.weight,
      sex: data.sex,
      activityLevel: data.activityLevel,
      purpose: data.purpose,
    } as ProfileInputValues,
    validationSchema: profileValidationSchema,
    onSubmit: (values) => {
      dispatch(saveProfile({ ...values, baseMetabolism, purposeMetabolism }));
    },
  });

  const { name, age, stature, weight, sex, activityLevel, purpose } =
    formik.values;

  const { baseMetabolism, activeMetabolism, purposeMetabolism } =
    calcMetabolism(formik.values);

  return (
    <ProfileContainer>
      <ProfileForm onSubmit={formik.handleSubmit}>
        <Input
          formik={formik}
          value={name}
          name="name"
          placeholder="Имя"
          type={"text"}
        />
        <Title>
          Введите данные чтобы рассчитать дневную норму калорийности
        </Title>
        <Inputs>
          <Input
            formik={formik}
            value={age}
            name="age"
            placeholder="Возраст"
            type={"number"}
          />
          <Input
            formik={formik}
            value={stature}
            name="stature"
            placeholder="Рост в см"
            type={"number"}
          />
          <Input
            formik={formik}
            value={weight}
            name="weight"
            placeholder="Вес в кг"
            type={"number"}
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
            !purpose
              ? ""
              : optionsPurpose.find((o) => o.value === purpose)!.text
          }
          options={optionsPurpose}
          name="purpose"
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
        <SaveButton
          type="submit"
          aria-label="Добавить запись"
          disabled={!formik.isValid}
        >
          Сохранить
        </SaveButton>
      </ProfileForm>
    </ProfileContainer>
  );
}

export default Profile;
