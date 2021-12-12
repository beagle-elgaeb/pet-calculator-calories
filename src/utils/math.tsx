import { MealItem } from "../redux/types";
import {
  CalculatedValues,
  ValidatedValues,
  ValuesKey,
  MealsInputValues,
  ProfileInputValues,
} from "./types";

export function prepareValues(inputValues: MealsInputValues) {
  const values = { ...inputValues };

  for (let key in values) {
    if (typeof values[key as ValuesKey] === "string") {
      values[key as ValuesKey] = 0;
    }
  }

  return calcСalories(values as ValidatedValues);
}

export function calcСalories(values: CalculatedValues): number {
  let result = 0;

  const weight = values.weight! / values.startWeight!;
  const ccalIn100Gr = values.protein * 4 + values.fat! * 9 + values.carb! * 4;

  result = Math.round(ccalIn100Gr * weight);

  return result;
}

export function calcTotalParameters(meals: MealItem[], date: string) {
  let mealsByDay = {} as Record<string, MealItem[]>;

  let summCalories = 0;
  let summProtein = 0;
  let summFat = 0;
  let summCarb = 0;
  let summWeight = 0;

  meals.forEach((meal) => {
    summCalories = summCalories + meal.calories!;
    summProtein = summProtein + Math.round(meal.protein!);
    summFat = summFat + Math.round(meal.fat!);
    summCarb = summCarb + Math.round(meal.carb!);
    summWeight = summWeight + Math.round(meal.weight!);
  });

  mealsByDay = { ...mealsByDay, [date]: meals };

  return {
    mealsByDay,
    summCalories,
    summProtein,
    summFat,
    summCarb,
    summWeight,
  };
}

export function calcMetabolism({
  age,
  stature,
  weight,
  sex,
  activityLevel,
  target,
}: ProfileInputValues) {
  let baseMetabolism = 0;

  if (sex === 12) {
    baseMetabolism = Math.round(
      447.593 + weight * 9.247 + stature * 3.098 - age * 4.33
    );
  } else if (sex === 7) {
    baseMetabolism = Math.round(
      88.362 + weight * 13.397 + stature * 4.799 - age * 5.667
    );
  }

  const activeMetabolism = Math.round(baseMetabolism * activityLevel);
  const targetMetabolism = Math.round(activeMetabolism * target);

  return { baseMetabolism, activeMetabolism, targetMetabolism };
}

export function calcAllMetabolism(ratio: number, activeMetabolism: number) {
  if (Number.isNaN(activeMetabolism)) return "";

  return Math.round(activeMetabolism * ratio);
}
