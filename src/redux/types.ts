export interface MealItem {
  id: number;
  protein: number | null;
  fat: number | null;
  carb: number | null;
  weight: number | null;
  calories: number;
  date: string;
}

export interface State {
  meals: MealItem[];
}
