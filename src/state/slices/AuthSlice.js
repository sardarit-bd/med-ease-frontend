import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isopenActionForm: false,
  issignin: false,
  issignup: false,
  isforgot: false,
  userRole: "patient",
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setissignin: (state, action) => {
      state.issignin = action.payload;
      state.issignup = false;
      state.isforgot = false;
      // console.log("issignin", state.issignin);
    },
    setissignup: (state, action) => {
      state.issignup = action.payload;
      state.issignin = false;
      state.isforgot = false;
      // console.log("issignup", state.issignup);
    },
    setisforgot: (state, action) => {
      state.isforgot = action.payload;
      state.issignin = false;
      state.issignup = false;
      // console.log("isforgot", state.isforgot);
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
});

export const { setissignin, setissignup, setisforgot, setUserRole } =
  authSlice.actions;
export default authSlice.reducer;
