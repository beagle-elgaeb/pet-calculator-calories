import styled from "@emotion/styled/macro";
import { FormikValues } from "formik";
import { MouseEvent, KeyboardEvent, useState, useEffect } from "react";
import {
  lightPurple,
  mediumPurple,
  purple,
  white,
  yellow,
} from "../styles/colors";

type PropsType = {
  formik: FormikValues;
  value: string | number;
  options: { value: number; span: string; text: string }[];
  name: string;
  placeholder: string;
};

function InputSelect({ formik, value, options, name, placeholder }: PropsType) {
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

const InputSelectContainer = styled.div`
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

const InputItem = styled.input<{ isValid: boolean; opened: boolean }>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background: ${lightPurple};
  border: ${({ isValid }) => (isValid ? "none" : `1px solid ${yellow}`)};
  border-bottom: ${({ opened }) =>
    opened ? `1px solid ${mediumPurple}` : "none"};
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
  z-index: 10;
`;

const List = styled.div<{ opened: boolean }>`
  height: ${({ opened }) => (opened ? "fit-content" : "0")};
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 40px;
  left: 0;
  display: ${({ opened }) => (opened ? "flex" : "none")};
  flex-direction: column;
  background: ${white};
  border: 1px solid ${mediumPurple};
  border-top: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0;
  z-index: 10;
`;

const ListItem = styled.button`
  min-height: 50px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${mediumPurple};
  outline: none;
  padding: 5px 15px;

  :last-child {
    border: none;
  }
`;

const ListItemText = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: ${purple};
  text-align: left;
  margin: 0;
`;

const ListItemSpan = styled.span`
  font-weight: 600;
  margin: 0;
`;
