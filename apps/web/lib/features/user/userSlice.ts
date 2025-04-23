import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  name: string;
  token: string;
}

const initialState: UserState = {
  email: "",
  name: "",
  token: localStorage.getItem("token") || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { updateUser, updateToken } = userSlice.actions;

export default userSlice.reducer;
