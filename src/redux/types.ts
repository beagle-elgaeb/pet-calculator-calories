import { PayloadAction } from "@reduxjs/toolkit";

export interface MealItem {
  id: number;
  protein: number;
  fat: number;
  carb: number;
  weight: number;
  calories: number;
  date: string;
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
  meals: MealItem[];
  profile: Profile;
}

export type PayloadAddMeal = PayloadAction<
  Omit<MealItem, "id" | "date"> & { startWeight: number }
>;
