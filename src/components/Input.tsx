import { InputProps } from "../utils/types";
import { Error, InputContainer, InputItem, Label } from "./Input.styles";

function Input({
  formik,
  value,
  name,
  placeholder,
  type,
  onKeyPress,
  onFocus,
  startWeight,
}: InputProps) {
  const getError = (name: keyof typeof formik.values) =>
    formik.touched[name] ? formik.errors[name] : undefined;

  return (
    <InputContainer startWeight={startWeight}>
      <InputItem
        placeholder={placeholder}
        name={name}
        type={type}
        isValid={!getError(name)}
        value={value ?? ""}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        autoComplete="off"
        required
        startWeight={startWeight}
      />

      <Label
        fullness={!!value}
        isValid={!getError(name)}
        startWeight={startWeight}
      >
        {!!value ? `${placeholder}` : `${placeholder[0]}`}
      </Label>

      <Error isValid={!getError(name)}>{getError(name)}</Error>
    </InputContainer>
  );
}

export default Input;
