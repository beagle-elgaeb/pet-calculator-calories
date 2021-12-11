import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { InputSelectPropsType } from "../utils/types";
import {
  Error,
  InputItem,
  InputSelectContainer,
  Label,
  List,
  ListItem,
  ListItemSpan,
  ListItemText,
} from "./InputSelect.styles";

function InputSelect({
  formik,
  value,
  options,
  name,
  placeholder,
}: InputSelectPropsType) {
  const getError = (name: keyof typeof formik.values) =>
    formik.touched[name] ? formik.errors[name] : undefined;

  const [listOpened, setListOpened] = useState(false);

  function handleSelect(evt: MouseEvent<HTMLButtonElement>, value: number) {
    evt.preventDefault();

    formik.setFieldValue(name, value);

    setListOpened(false);
  }

  function supressInput(evt: KeyboardEvent<HTMLInputElement>) {
    evt.preventDefault();
  }

  useEffect(() => {
    if (!listOpened) {
      return;
    }

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listOpened]);

  function onClick() {
    setListOpened(false);
  }

  return (
    <InputSelectContainer>
      <InputItem
        placeholder={placeholder.slice(1)}
        name={name}
        type="text"
        isValid={!getError(name)}
        value={value}
        onFocus={() => {
          formik.setFieldValue(placeholder, "");
          setListOpened(true);
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        opened={listOpened}
        autoComplete="off"
        onKeyPress={supressInput}
        readOnly
      />
      <Label fullness={!!value} isValid={!getError(name)}>
        {!!value ? `${placeholder}` : `${placeholder[0]}`}
      </Label>
      <Error isValid={!getError(name)}>{getError(name)}</Error>
      <List opened={listOpened} onMouseDown={(evt) => evt.stopPropagation()}>
        {options.map((option, i) => (
          <ListItem
            key={i}
            type="button"
            onClick={(evt) => handleSelect(evt, option.value)}
          >
            <ListItemText>
              <ListItemSpan>{option.span}</ListItemSpan> {option.text}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </InputSelectContainer>
  );
}

export default InputSelect;
