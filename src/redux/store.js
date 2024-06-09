import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { userSlice } from "./features/userSlice";
import { advertiseSlice } from "./features/advertiseSlice";

export const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    user: userSlice.reducer,
    advertise: advertiseSlice.reducer,
  },
});
