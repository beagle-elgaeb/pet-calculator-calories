import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "./types";

export const mealSlise = createSlice({
  name: "profile",
  initialState: {
    name: "",
    age: "",
    stature: "",
    weight: "",
    sex: 0,
    activityLevel: 0,
    target: 0,
    baseMetabolism: 0,
    targetMetabolism: 0,
  } as Profile,
  reducers: {
    loadStateProfile: (_, { payload }: PayloadAction<Profile>) => {
      return payload;
    },
    saveProfile: (state, { payload }: PayloadAction<Profile>) => {
      state.name = payload.name;
      state.age = payload.age;
      state.stature = payload.stature;
      state.weight = payload.weight;
      state.sex = payload.sex;
      state.activityLevel = payload.activityLevel;
      state.target = payload.target;
      state.baseMetabolism = payload.baseMetabolism;
      state.targetMetabolism = payload.targetMetabolism;
    },
  },
});

export const { loadStateProfile, saveProfile } = mealSlise.actions;

export default mealSlise.reducer;
