import { createSlice } from "@reduxjs/toolkit";

export const yaaVandame = createSlice({
  name: "counter",
  initialState: {
    vandame: ["Harrison", "sam generals"],
  },
  reducers: {
    addVandame: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addVandame } = yaaVandame.actions;

export default yaaVandame.reducer;
