import { KeyboardEvent as ReactKeyboardEvent } from "react";
import { MealItem } from "../redux/types";

// Типы пропсов

export type AppLayoutProps = {
  handleMenuClick: () => void;
  menuPopupOpen: boolean;
};

export type HeaderProps = {
  onMenuClick: () => void;
  popupOpened: boolean;
};

export type CalculatorProps = {
  handleMealClick: (meal: MealItem) => void;
};

export type CalculatorFormProps = {
  visible: boolean;
};

export type DaysProps = {
  handleMealClick: (meal: MealItem) => void;
};

export type MealsProps = {
  date: number;
  handleMealClick: (meal: MealItem) => void;
};

export type InfographicsProps = {
  summCalories: number;
  summProtein: number;
  summFat: number;
  summCarb: number;
  date: number;
};

export type MenuPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onKeydown: (evt: KeyboardEvent) => void;
};

export type MealPopupProps = {
  data: MealItem | undefined;
  isOpen: boolean;
  onClose: () => void;
  onKeydown: (evt: KeyboardEvent) => void;
};

export type SavedMealProps = {
  data: MealItem | undefined;
  setEditedForm: (value: boolean) => void;
};

export type MealFormProps = {
  data: MealItem | undefined;
  setEditedForm: (value: boolean) => void;
  onClose: () => void;
};

export type SavedProfileProps = {
  setEditedForm: (value: boolean) => void;
};

export type ProfileFormProps = {
  setEditedForm: (value: boolean) => void;
};

export type MenuProps = {
  onClose: () => void;
};

export type LogoProps = {
  opened?: boolean;
  onClickHandle?: () => void;
};

export type InputProps = {
  formik: any;
  value: string | number;
  name: string;
  placeholder: string;
  type: string;
  onKeyPress?: (evt: ReactKeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  startWeight?: boolean;
};

export type InputSelectPropsType = {
  formik: any;
  value: string | number;
  name: string;
  placeholder: string;
  options: { value: number; span: string; text: string }[];
};

// Типы значений

export type MealsInputValues = {
  name: string;
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
  age: string;
  stature: string;
  weight: string;
  sex: number;
  activityLevel: number;
  target: number;
};
