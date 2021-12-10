import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "./types";

export const mealSlise = createSlice({
  name: "profile",
  initialState: {} as Profile,
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
      state.purpose = payload.purpose;
      state.baseMetabolism = payload.baseMetabolism;
      state.purposeMetabolism = payload.purposeMetabolism;
    },
  },
});

export const { loadStateProfile, saveProfile } = mealSlise.actions;

export default mealSlise.reducer;
