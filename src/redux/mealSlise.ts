import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MealItem, PayloadAddMeal } from "./types";

export const mealSlise = createSlice({
  name: "meal",
  initialState: [] as MealItem[],
  reducers: {
    loadStateMeals: (_, { payload }: PayloadAction<MealItem[]>) => {
      return payload;
    },
    addMeal: (state, { payload }: PayloadAddMeal) => {
      state.unshift({
        id: Date.now(),
        protein:
          Math.round(payload.protein! * payload.weight!) / payload.startWeight,
        fat: Math.round(payload.fat! * payload.weight!) / payload.startWeight,
        carb: Math.round(payload.carb! * payload.weight!) / payload.startWeight,
        weight: payload.weight,
        calories: payload.calories,
        timestamp: Date.now(),
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
