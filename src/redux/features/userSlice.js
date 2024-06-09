import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // if (token) {
  // } else {
  //   delete axios.defaults.headers.common["Authorization"];
  // }
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;

      // Set Axios default headers when user state changes
      setAuthToken(action.payload?.token);

      // console.log("get token form userSlice =>", action.payload?.token);

      console.log("state =>", state);
      console.log("action =>", action);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
