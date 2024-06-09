import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {}, // Initial value object
  isModalOpen: false,
};

export const advertiseSlice = createSlice({
  name: "advertise",
  initialState,
  reducers: {
    setValue: (state, action) => {
      console.log("we are getting data in advertiseSlice =>", action.payload);

      state.value = action.payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { setValue, openModal, closeModal } = advertiseSlice.actions;
