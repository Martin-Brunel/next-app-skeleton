import { User } from "@/domain/entities/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MainState = {
  text: string;
  users: User[]
};

const initialState = {
  text: "inital text",
  users: [] as User[]
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setMainState: (state, action: PayloadAction<Partial<MainState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setMainState } = mainSlice.actions;

export default mainSlice.reducer;
