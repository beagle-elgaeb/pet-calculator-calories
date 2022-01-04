import { PayloadAction } from "@reduxjs/toolkit";

export interface History {
  id: number;
  timestamp: number;
  targetMetabolism: number;
}

export interface MealItem {
  id: number;
  name: string;
  protein: string;
  fat: string;
  carb: string;
  weight: string;
  calories: number;
  timestamp: number;
}

export interface Profile {
  name: string;
  age: string;
  stature: string;
  weight: string;
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
  Omit<MealItem, "id" | "timestamp"> & { startWeight: string }
>;

export type PayloadEditMeal = PayloadAction<
  Omit<MealItem, "timestamp"> & {
    startWeight: string;
    day: string;
    month: string;
    year: string;
  }
>;
