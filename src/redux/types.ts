export interface MealItem {
  id: number;
  protein: number | null;
  fat: number | null;
  carb: number | null;
  weight: number | null;
  calories: number;
  date: string;
}

export interface Profile {
  name: string;
  age: string;
  stature: string;
  weight: string;
  sex: string;
  activityLevel: string;
  purpose: string;
  baseMetabolism: number;
  purposeMetabolism: number;
}

export interface State {
  meals: MealItem[];
  profile: Profile;
}
