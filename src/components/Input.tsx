import styled from "@emotion/styled/macro";
import { FormikValues } from "formik";
import { lightPurple, mediumPurple, purple, yellow } from "../styles/colors";

type PropsType = {
  formik: FormikValues;
  value: string;
  name: string;
  placeholder: string;
};

function Input({ formik, value, name, placeholder }: PropsType) {
  const getError = (name: keyof typeof formik.values) =>
    formik.touched[name] ? formik.errors[name] : undefined;

  return (
    <InputContainer>
      <InputItem
        placeholder={placeholder.slice(1)}
        name={name}
        type="text"
        isValid={!getError(name)}
        value={value ?? ""}
        onFocus={() => formik.setFieldValue(placeholder, "")}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete="off"
      />
      <Label fullness={!!value} isValid={!getError(name)}>
        {!!value ? `${placeholder}` : `${placeholder[0]}`}
      </Label>
      <Error isValid={!getError(name)}>{getError(name)}</Error>
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  height: 40px;
  width: 100%;
  position: relative;
  margin: 0 0 10px;
`;

const Label = styled.p<{ fullness: boolean; isValid: boolean }>`
  width: ${({ fullness }) => (fullness ? "fit-content" : "24px")};
  position: absolute;
  top: ${({ fullness }) => (fullness ? "-6px" : "8px")};
  left: ${({ fullness }) => (fullness ? "5px" : "1px")};
  background: ${lightPurple};
  border-top: ${({ fullness, isValid }) =>
    fullness ? (isValid ? "none" : `1px solid ${yellow}`) : "none"};
  font-size: ${({ fullness }) => (fullness ? "10px" : "20px")};
  line-height: ${({ fullness }) => (fullness ? "12px" : "22px")};
  text-align: right;
  margin: 0;
  padding: ${({ fullness }) => (fullness ? "0 10px" : "0")};
`;

const InputItem = styled.input<{ isValid: boolean }>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background: ${lightPurple};
  border: ${({ isValid }) => (isValid ? "none" : `1px solid ${yellow}`)};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  line-height: 20px;
  color: ${purple};
  padding: 0 10px 0 25px;

  ::placeholder {
    font-size: 18px;
    line-height: 20px;
    font-weight: 200;
    color: ${mediumPurple};
  }

  :focus {
    border: 1px solid ${mediumPurple};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
