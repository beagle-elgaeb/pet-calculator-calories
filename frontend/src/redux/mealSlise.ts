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
        protein: String(
          Math.round(
            (Number(payload.protein!) * Number(payload.weight!) * 100) /
              Number(payload.startWeight)
          ) / 100
        ),
        fat: String(
          Math.round(
            (Number(payload.fat!) * Number(payload.weight!) * 100) /
              Number(payload.startWeight)
          ) / 100
        ),
        carb: String(
          Math.round(
            (Number(payload.carb!) * Number(payload.weight!) * 100) /
              Number(payload.startWeight)
          ) / 100
        ),
        weight: payload.weight,
        calories: payload.calories,
        timestamp: Date.now(),
      });
    },
    editMeal: (state, { payload }: PayloadEditMeal) => {
      const newMeal = state.find((meal) => meal.id === payload.id);

      newMeal!.name = payload.name;
      newMeal!.protein =
        String(Math.round(
          (Number(payload.protein!) * Number(payload.weight!) * 100) /
            Number(payload.startWeight)
        ) / 100);
      newMeal!.fat =
        String(Math.round(
          (Number(payload.fat!) * Number(payload.weight!) * 100) /
            Number(payload.startWeight)
        ) / 100);
      newMeal!.carb =
        String(Math.round(
          (Number(payload.carb!) * Number(payload.weight!) * 100) /
            Number(payload.startWeight)
        ) / 100);
      newMeal!.weight = payload.weight;
      newMeal!.calories = payload.calories;
      newMeal!.timestamp = new Date(newMeal!.timestamp).setFullYear(
        Number(payload.year),
        Number(payload.month) - 1,
        Number(payload.day)
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
