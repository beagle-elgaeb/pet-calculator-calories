import { MealItem } from "../redux/types";
import {
  CalculatedValues,
  ValidatedValues,
  ValuesKey,
  InputValues,
} from "./types";

export function prepareValues(inputValues: InputValues) {
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

  const weight = values.weight! / 100;
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

export function calcWordEnding(number: number) {
  const str = String(number);
  const penultimateNumber = Number(str[Number(str.length) - 2]);
  const lastNumber = Number(str[Number(str.length) - 1]);

  if (lastNumber === 1) {
    if (!!penultimateNumber && penultimateNumber === 1) {
      return "килокалорий";
    } else {
      return "килокалорию";
    }
  } else if (lastNumber === 2 || lastNumber === 3 || lastNumber === 4) {
    if (!!penultimateNumber && penultimateNumber === 1) {
      return "килокалорий";
    } else {
      return "килокалории";
    }
  } else {
    return "килокалорий";
  }
}
