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
  age: number;
  stature: number;
  weight: number;
  sex: number;
  activityLevel: number;
  purpose: number;
  baseMetabolism: number;
  purposeMetabolism: number;
}

export interface State {
  meals: MealItem[];
  profile: Profile;
}

export type PayloadAddMeal = PayloadAction<
  Omit<MealItem, "id" | "date"> & { startWeight: number }
>;
