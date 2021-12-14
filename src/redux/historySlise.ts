import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { History, PayloadAddHistory } from "./types";

export const historySlise = createSlice({
  name: "history",
  initialState: [] as History[],
  reducers: {
    loadStateHistory: (_, { payload }: PayloadAction<History[]>) => {
      return payload;
    },
    addHistory: (state, { payload }: PayloadAddHistory) => {
      state.unshift({
        id: Date.now(),
        timestamp: Date.now(),
        targetMetabolism: payload.targetMetabolism,
      });
    },
  },
});

export const { loadStateHistory, addHistory } = historySlise.actions;

export default historySlise.reducer;
