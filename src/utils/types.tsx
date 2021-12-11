import { FormikValues } from "formik";
import { KeyboardEvent as ReactKeyboardEvent } from "react";

// Типы пропсов

export type HeaderProps = {
  onMenuClick: () => void;
  popupOpened: boolean;
};

export type MealsProps = {
  date: string;
};

export type MenuPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onKeydown: (evt: KeyboardEvent) => void;
};

export type MenuProps = {
  onClose: () => void;
};

export type LogoProps = {
  opened?: boolean;
  onClickHandle?: () => void;
};

export type InputProps = {
  formik: FormikValues;
  value: string | number;
  name: string;
  placeholder: string;
  type: string;
  onKeyPress?: (evt: ReactKeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  startWeight?: boolean
};

export type InputSelectPropsType = {
  formik: FormikValues;
  value: string | number;
  name: string;
  placeholder: string;
  options: { value: number; span: string; text: string }[];
};

// Типы значений

export type MealsInputValues = {
  startWeight: number | string;
  protein: number | string;
  fat: number | string;
  carb: number | string;
  weight: number | string;
};

export type CalculatedValues = {
  startWeight: number;
  protein: number;
  fat: number;
  carb: number;
  weight: number;
};

export type ValuesKey = keyof CalculatedValues;
export type ValidatedValues = Record<ValuesKey, number>;

export type ProfileInputValues = {
  name: string;
  age: number;
  stature: number;
  weight: number;
  sex: number;
  activityLevel: number;
  purpose: number;
};
