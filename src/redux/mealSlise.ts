import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MealItem, PayloadAddMeal, PayloadEditMeal } from "./types";

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
        name: payload.name,
        protein:
          Math.round(
            (payload.protein! * payload.weight! * 100) / payload.startWeight
          ) / 100,
        fat:
          Math.round(
            (payload.fat! * payload.weight! * 100) / payload.startWeight
          ) / 100,
        carb:
          Math.round(
            (payload.carb! * payload.weight! * 100) / payload.startWeight
          ) / 100,
        weight: payload.weight,
        calories: payload.calories,
        timestamp: Date.now(),
      });
    },
    editMeal: (state, { payload }: PayloadEditMeal) => {
      const newMeal = state.find((meal) => meal.id === payload.id);

      newMeal!.name = payload.name;
      newMeal!.protein =
        Math.round(
          (payload.protein! * payload.weight! * 100) / payload.startWeight
        ) / 100;
      newMeal!.fat =
        Math.round(
          (payload.fat! * payload.weight! * 100) / payload.startWeight
        ) / 100;
      newMeal!.carb =
        Math.round(
          (payload.carb! * payload.weight! * 100) / payload.startWeight
        ) / 100;
      newMeal!.weight = payload.weight;
      newMeal!.calories = payload.calories;
      newMeal!.timestamp = new Date(newMeal!.timestamp).setFullYear(
        payload.year,
        payload.month - 1,
        payload.day
      );
    },
    remove: (state, { payload }: PayloadAction<{ id: number }>) => {
      const index = state.findIndex(({ id }) => id === payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { loadStateMeals, addMeal, editMeal, remove } = mealSlise.actions;

export default mealSlise.reducer;
