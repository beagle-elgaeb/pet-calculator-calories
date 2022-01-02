import { KeyboardEvent as ReactKeyboardEvent } from "react";

export function onKeyPress(
  evt: ReactKeyboardEvent<HTMLInputElement>,
  formik: any
) {
  if (
    evt.key === "-" ||
    evt.key === "+" ||
    evt.key === "e" ||
    // (evt.currentTarget.value === "0" && /^[0]/.test(evt.key)) ||
    evt.currentTarget.value.length >= 6
  ) {
    evt.preventDefault();
  }

  // const cursorPosition = input.selectionStart;
  // console.log(cursorPosition);
  // console.log(input.selectionEnd);

  // if (evt.key === ",") {
  //   evt.preventDefault();
  // }

  // if (evt.currentTarget.value === "0" && /^[1-9]/.test(evt.key)) {
  //   formik.setFieldValue(evt.currentTarget.name, "");
  // }
}

export function onKeyPressProfile(evt: ReactKeyboardEvent<HTMLInputElement>) {
  if (!/^[0-9]/.test(evt.key) || evt.currentTarget.value.length >= 3) {
    evt.preventDefault();
  }
}
