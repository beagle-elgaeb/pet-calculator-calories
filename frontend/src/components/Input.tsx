import { InputProps } from "../utils/types";
import { Error, InputContainer, InputItem, Label } from "./Input.styles";

function Input({
  formik,
  value,
  name,
  type,
  placeholder,
  onKeyPress,
  handleChange,
  onFocus,
  startWeight,
}: InputProps) {
  const getError = (name: keyof typeof formik.values) =>
    formik.touched[name] ? formik.errors[name] : undefined;

  return (
    <InputContainer startWeight={startWeight}>
      <InputItem
        placeholder={placeholder.slice(1)}
        name={name}
        type={type ?? "text"}
        isValid={!getError(name)}
        value={value ?? ""}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        autoComplete="off"
        required
        startWeight={startWeight}
      />

      <Label
        fullness={!!value || value === 0}
        isValid={!getError(name)}
        startWeight={startWeight}
      >
        {!!value || value === 0 ? `${placeholder}` : `${placeholder[0]}`}
      </Label>

      <Error isValid={!getError(name)}>{getError(name)}</Error>
    </InputContainer>
  );
}

export default Input;
