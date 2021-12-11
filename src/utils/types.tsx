// Типы пропсов

export type HeaderProps = {
  onMenuClick: () => void;
  popupOpened: boolean;
};

export type MenuPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onKeydown: (evt: KeyboardEvent) => void;
};

// Типы значений

export type InputValues = {
  protein: number | string;
  fat: number | string;
  carb: number | string;
  weight: number | string;
};

export type CalculatedValues = {
  protein: number;
  fat: number;
  carb: number;
  weight: number;
};

export type ValuesKey = keyof CalculatedValues;
export type ValidatedValues = Record<ValuesKey, number>;
