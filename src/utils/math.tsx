import { MealItem } from "../redux/types";
import { MealsInputValues, ProfileInputValues } from "./types";

export function calcСalories(values: MealsInputValues): number {
  let result = 0;

  const weight = Number(values.weight!) / Number(values.startWeight)!;
  const ccalIn100Gr =
    Number(values.protein) * 4 +
    Number(values.fat!) * 9 +
    Number(values.carb!) * 4;

  result = Math.round(ccalIn100Gr * weight);

  return result;
}

export function calcTotalParameters(meals: MealItem[], date: number) {
  let mealsByDay = {} as Record<string, MealItem[]>;

  let summCalories = 0;
  let summProtein = 0;
  let summFat = 0;
  let summCarb = 0;
  let summWeight = 0;

  meals.forEach((meal) => {
    summCalories = summCalories + meal.calories!;
    summProtein = summProtein + Math.round(Number(meal.protein!) * 100) / 100;
    summFat = summFat + Math.round(Number(meal.fat!) * 100) / 100;
    summCarb = summCarb + Math.round(Number(meal.carb!) * 100) / 100;
    summWeight = summWeight + Math.round(Number(meal.weight!) * 100) / 100;
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
      447.593 +
        Number(weight) * 9.247 +
        Number(stature) * 3.098 -
        Number(age) * 4.33
    );
  } else if (sex === 7) {
    baseMetabolism = Math.round(
      88.362 +
        Number(weight) * 13.397 +
        Number(stature) * 4.799 -
        Number(age) * 5.667
    );
  }

  const activeMetabolism = Math.round(baseMetabolism * activityLevel);

  let targetMetabolism = 0;

  if (sex === 12) {
    targetMetabolism =
      Math.round(activeMetabolism * target) > 1200
        ? Math.round(activeMetabolism * target)
        : 1200;
  } else if (sex === 7) {
    targetMetabolism =
      Math.round(activeMetabolism * target) > 1800
        ? Math.round(activeMetabolism * target)
        : 1800;
  }

  const targetProtein = (targetMetabolism * 0.3) / 4;
  const targetFat = (targetMetabolism * 0.3) / 9;
  const targetCarb = (targetMetabolism * 0.4) / 4;

  return {
    baseMetabolism,
    activeMetabolism,
    targetMetabolism,
    targetProtein,
    targetFat,
    targetCarb,
  };
}

export function calcNutrients(targetMetabolism: number) {
  const targetProtein = (targetMetabolism * 0.3) / 4;
  const targetFat = (targetMetabolism * 0.3) / 9;
  const targetCarb = (targetMetabolism * 0.4) / 4;

  return {
    targetProtein,
    targetFat,
    targetCarb,
  };
}

export function calcBMI(
  name: string,
  weight: number | string,
  stature: number | string
) {
  let bmiText = "";
  let bmi;

  if (!!name) {
    bmi = Math.round(Number(weight) / ((Number(stature) / 100) ^ 2));

    if (bmi <= 16) {
      bmiText = "выраженный дефицит";
    } else if (bmi > 16 && bmi <= 18.5) {
      bmiText = "дефицит";
    } else if (bmi > 18.5 && bmi <= 25) {
      bmiText = "норма";
    } else if (bmi > 25 && bmi <= 30) {
      bmiText = "избыточная масса";
    } else if (bmi > 30 && bmi <= 35) {
      bmiText = "ожирение 1 степени";
    } else if (bmi > 35 && bmi <= 40) {
      bmiText = "ожирение 2 степени";
    } else if (bmi > 40) {
      bmiText = "ожирение 3 степени";
    }
  }

  return { bmi, bmiText };
}

export function calcAllMetabolism(ratio: number, activeMetabolism: number) {
  if (Number.isNaN(activeMetabolism)) return "";

  return Math.round(activeMetabolism * ratio);
}
