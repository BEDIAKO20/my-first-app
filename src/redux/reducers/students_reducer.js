import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    students_male: [
      { name: "abu", gen: 23 },
      { name: "abu", gen: 23 },
      { name: "abu", gen: 23 },
      { name: "abu", gen: 23 },
    ],
    students_female: [
      { name: "philo", gen: 23 },
      { name: "philo", gen: 23 },
      { name: "philo", gen: 23 },
      { name: "philo", gen: 23 },
      { name: "philo", gen: 23 },
    ],
  },
  reducers: {
    addNewMaleStudent: (state, action) => {
      state.students_male = [...state.students_male, action.payload];
    },
    addNewFemaleStudent: (state, action) => {
      state.students_female = [...state.students_female, action.payload];
    },
  },
});

export const { addNewFemaleStudent, addNewMaleStudent } = studentSlice.actions;
export default studentSlice.reducer;
