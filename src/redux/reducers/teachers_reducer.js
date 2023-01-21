import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
  name: "students",
  initialState: {
    teachers_male: [
      { name: "Nana", gen: 23 },
      { name: "Nana", gen: 23 },
      { name: "Nana", gen: 23 },
      { name: "Nana", gen: 23 },
    ],
    teachers_female: [
      { name: "Esther", gen: 23 },
      { name: "Esther", gen: 23 },
      { name: "Esther", gen: 23 },
      { name: "Esther", gen: 23 },
      { name: "Esther", gen: 23 },
    ],
  },
  reducer: {
    addNewMaleteacher: (state, action) => {
      state.teachers_male = [...state.teachers_male, action.payload];
    },
    addNewFemaleteacher: (state, action) => {
      state.teachers_female = [...state.teachers_female, action.payload];
    },
  },
});

export const { addNewFemaleteacher, addNewMaleteacher } = teacherSlice.actions;
export default teacherSlice.reducer;
