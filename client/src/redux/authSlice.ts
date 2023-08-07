import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserInfoType {
  email: string;
  jwtToken: string;
  username: string;
  _id: string;
}

interface AuthState {
  userInformation: UserInfoType | null;
}

const getInitialState = (): AuthState => {
  const localStorageData = localStorage.getItem("userInformation");
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    userInformation: localStorageData ? JSON.parse(localStorageData) : null,
  };
};
const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    // add user info to local storage
    setLocalUser: (state, action: PayloadAction<UserInfoType>) => {
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
