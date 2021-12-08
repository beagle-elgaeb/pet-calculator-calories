import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useEffect, useState, KeyboardEvent } from "react";
import { lightPurple, mediumPurple, purple, yellow } from "../styles/colors";
import { calcСalories } from "../utils/math";
import { Input, Label } from "../styles/patterns";
import { validationSchema } from "../utils/validation";
import { useDispatch } from "react-redux";
import { addMeal } from "../redux/mealSlise";

function Form() {
  const dispatch = useDispatch();

  const [calories, setCalories] = useState(0);

  const formik = useFormik({
    initialValues: {
      protein: null,
      fat: null,
      carb: null,
      weight: 100,
    } as {
      protein: number | null;
      fat: number | null;
      carb: number | null;
      weight: number | null;
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addMeal({ ...values, calories }));
      resetForm();
    },
  });

  const { protein, fat, carb, weight } = formik.values;

  const getError = (name: keyof typeof formik.values) =>
    formik.touched[name] ? formik.errors[name] : undefined;

  useEffect(() => {
    setCalories(calcСalories(formik.values));
  }, [formik.values]);

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
        <InputContainer>
          <InputBJU
            placeholder="елки"
            name="protein"
            type="number"
            min="0"
            max="100"
            step="0.01"
            onKeyPress={onKeyPress}
            isValid={!getError("protein")}
            value={protein ?? ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <LabelBJU fullness={!!protein} isValid={!getError("protein")}>
            {!!protein ? "Белки" : "Б"}
          </LabelBJU>
          <Error isValid={!getError("protein")}>{getError("protein")}</Error>
        </InputContainer>
        <InputContainer>
          <InputBJU
            placeholder="иры"
            name="fat"
            type="number"
            min="0"
            max="100"
            step="0.01"
            onKeyPress={onKeyPress}
            isValid={!getError("fat")}
            value={fat ?? ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <LabelBJU fullness={!!fat} isValid={!getError("fat")}>
            {!!fat ? "Жиры" : "Ж"}
          </LabelBJU>
          <Error isValid={!getError("fat")}>{getError("fat")}</Error>
        </InputContainer>
        <InputContainer>
          <InputBJU
            placeholder="глеводы"
            name="carb"
            type="number"
            min="0"
            max="100"
            step="0.01"
            onKeyPress={onKeyPress}
            isValid={!getError("carb")}
            value={carb ?? ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <LabelBJU fullness={!!carb} isValid={!getError("carb")}>
            {!!carb ? "Углеводы" : "У"}
          </LabelBJU>
          <Error isValid={!getError("carb")}>{getError("carb")}</Error>
        </InputContainer>
      </Grid>
      <Title>Вес продукта:</Title>
      <InputContainer>
        <InputG
          placeholder="рамм"
          type="number"
          min="0"
          max="1000"
          step="0.01"
          onKeyPress={onKeyPress}
          isValid={!getError("weight")}
          {...formik.getFieldProps("weight")}
        />
        <LabelG fullness={!!weight} isValid={!getError("weight")}>
          {!!weight ? "Граммы" : "Г"}
        </LabelG>
        <Error isValid={!getError("weight")}>{getError("weight")}</Error>
      </InputContainer>
      <SaveButton type="submit" disabled={!formik.isValid}>
        {` Добавить ${calories === 0 ? "немного" : calories} килокалорий`}
      </SaveButton>
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.form`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
  text-align: start;
  margin: 0 0 15px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const InputContainer = styled.div`
  height: 36px;
  width: 100%;
  position: relative;
  margin: 0 0 10px;
`;

const LabelBJU = styled.p<{ fullness: boolean; isValid: boolean }>`
  ${Label}

  ${({ fullness }) => (fullness ? "left: 5px;" : "right: 80%;")};
`;

const InputBJU = styled.input<{ isValid: boolean }>`
  ${Input};

  padding-left: 21%;
`;

const Error = styled.div<{ isValid: boolean }>`
  position: absolute;
  bottom: -6px;
  right: 10px;
  background: ${lightPurple};
  border-bottom: ${({ isValid }) => (isValid ? "none" : `1px solid ${yellow}`)};
  font-size: 12px;
  line-height: 14px;
  color: ${yellow};
  padding: 0 10px;
`;

const LabelG = styled.p<{ fullness: boolean; isValid: boolean }>`
  ${Label}

  ${({ fullness }) => (fullness ? "left: 10px;" : "right: 94%;")};
`;

const InputG = styled.input<{ isValid: boolean }>`
  ${Input};

  padding-left: 6.2%;
`;

const SaveButton = styled.button<{ disabled: boolean }>`
  height: 36px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  background: ${lightPurple};
  border: 1px solid ${mediumPurple};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  color: ${({ disabled }) => (disabled ? `${mediumPurple}` : `${purple}`)};
  cursor: pointer;
  margin: 10px 0;

  :hover {
    box-shadow: 0 0 5px 1px ${mediumPurple};
  }
`;
