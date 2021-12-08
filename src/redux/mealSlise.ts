import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MealItem } from "./types";

const names = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

function getMonth(date: Date) {
  return names[date.getMonth()];
}

export const mealSlise = createSlice({
  name: "todoItem",
  initialState: [] as MealItem[],
  reducers: {
    loadState: (_, { payload }: PayloadAction<MealItem[]>) => {
      return payload;
    },
    addMeal: (
      state,
      { payload }: PayloadAction<Omit<MealItem, "id" | "date">>
    ) => {
      const date = new Date(Date.now());

      state.unshift({
        id: Date.now(),
        protein: payload.protein,
        fat: payload.fat,
        carb: payload.carb,
        weight: payload.weight,
        calories: payload.calories,
        date: `${date.getDate().toString().padStart(2, "0")} ${getMonth(date)}`,
      });
    },
  },
});

export const { loadState, addMeal } = mealSlise.actions;

export default mealSlise.reducer;
