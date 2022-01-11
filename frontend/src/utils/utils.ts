import { ChangeEvent, KeyboardEvent as ReactKeyboardEvent } from "react";

export function onKeyPress(
  evt: ReactKeyboardEvent<HTMLInputElement>,
  formik: any
) {
  if (
    !/^[\d.,]/.test(evt.key) ||
    (evt.currentTarget.value === "0" && /^[0]/.test(evt.key)) ||
    evt.currentTarget.value.length >= 6 ||
    ((evt.currentTarget.value.includes(".") ||
      evt.currentTarget.value.includes(",")) &&
      /^[.,]/.test(evt.key))
  ) {
    evt.preventDefault();
  }

  if (evt.currentTarget.value === "0" && /^[1-9]/.test(evt.key)) {
    formik.setFieldValue(evt.currentTarget.name, "");
  }
}

export function handleNumericChange(
  evt: ChangeEvent<HTMLInputElement>,
  formik: any
) {
  const value = evt.currentTarget.value.replace(",", ".");

  formik.setFieldValue(evt.currentTarget.name, value);
}

export function onKeyPressProfile(evt: ReactKeyboardEvent<HTMLInputElement>) {
  if (!/^[0-9]/.test(evt.key) || evt.currentTarget.value.length >= 3) {
    evt.preventDefault();
  }
}
