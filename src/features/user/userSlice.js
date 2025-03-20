import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { username: "codding addict" },
  theme: "dracula",
};

const userSlice = createSlice({
  name: "user".initialState,
  reducers: {
    loginUser: (state) => {
      console.log("login");
    },
    logoutUser: (state) => {
      console.log("logout");
    },
    toggleTheme: (state) => {
      console.log("toggle theme");
    },
  },
});

export const {logoutUser ,loginUser, toggleTheme
} = userSlice.actions
export default userSlice.reducer;
