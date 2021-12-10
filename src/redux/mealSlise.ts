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
  name: "meal",
  initialState: [] as MealItem[],
  reducers: {
    loadStateMeals: (_, { payload }: PayloadAction<MealItem[]>) => {
      return payload;
    },
    addMeal: (
      state,
      { payload }: PayloadAction<Omit<MealItem, "id" | "date">>
    ) => {
      const date = new Date(Date.now());

      state.unshift({
        id: Date.now(),
        protein: Math.round(payload.protein! * payload.weight!) / 100,
        fat: Math.round(payload.fat! * payload.weight!) / 100,
        carb: Math.round(payload.carb! * payload.weight!) / 100,
        weight: payload.weight,
        calories: payload.calories,
        date: `${date.getDate().toString()} ${getMonth(date)}`,
      });
    },
    remove: (state, { payload }: PayloadAction<{ id: number }>) => {
      const index = state.findIndex(({ id }) => id === payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { loadStateMeals, addMeal, remove } = mealSlise.actions;

export default mealSlise.reducer;
