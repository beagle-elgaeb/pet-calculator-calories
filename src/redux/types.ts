import { PayloadAction } from "@reduxjs/toolkit";

export interface History {
  id: number;
  timestamp: number;
  targetMetabolism: number;
}

export interface MealItem {
  id: number;
  name: string;
  protein: number;
  fat: number;
  carb: number;
  weight: number;
  calories: number;
  timestamp: number;
}

export interface Profile {
  name: string;
  age: number | string;
  stature: number | string;
  weight: number | string;
  sex: number;
  activityLevel: number;
  target: number;
  baseMetabolism: number;
  targetMetabolism: number;
}

export interface State {
  history: History[];
  meals: MealItem[];
  profile: Profile;
}

export type PayloadAddHistory = PayloadAction<
  Omit<History, "id" | "timestamp">
>;

export type PayloadAddMeal = PayloadAction<
  Omit<MealItem, "id" | "timestamp"> & { startWeight: number }
>;

export type PayloadEditMeal = PayloadAction<
  Omit<MealItem, "timestamp"> & {
    startWeight: number;
    day: number;
    month: number;
    year: number;
  }
>;
