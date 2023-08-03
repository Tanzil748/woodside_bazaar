import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInformation: localStorage.getItem("userInformation")
      ? JSON.parse(localStorage.getItem("userInformation"))
      : null,
  },
  reducers: {
    // add user info to local storage
    setLocalUser: (state, action) => {
      state.userInformation = action.payload;
      localStorage.setItem(
        "userInformation",
        JSON.stringify(state.userInformation)
      );
    },
    // remove user info from local storage
    removeLocalUser: (state) => {
      state.userInformation = null;
      localStorage.removeItem("userInformation");
    },
  },
});

export const { setLocalUser, removeLocalUser } = authSlice.actions;
export default authSlice.reducer;
