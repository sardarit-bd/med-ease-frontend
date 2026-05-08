import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isopenActionForm: false,
  issignin: true,
  issignup: false,
  isforgot: false,
  userRole: "patient",
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setissignin: (state) => {
      state.issignin = !state.issignin;
    },
    setissignup: (state) => {
      state.issignup = !state.issignup;
    },
    setisforgot: (state) => {
      state.isforgot = !state.isforgot;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
});

export const { setissignin, setissignup, setisforgot, setUserRole } =
  authSlice.actions;
export default authSlice.reducer;
