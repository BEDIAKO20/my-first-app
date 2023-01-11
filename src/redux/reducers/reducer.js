import { createSlice } from "@reduxjs/toolkit";

//creating reducer slice holds action and reducer
const studentSlice = createSlice({
  name: "students",

  //setting initial states for reducer
  initialState: {
    students: [],
  },
  //setting reducers and action functions
  reducers: {
    getStudents: (state) => {
      return state.students;
    },
    deleteStudents: (state, actions) => {},
  },
});

//exporting actions from slice
export const { getStudents, deleteStudents } = studentSlice.actions;
//exporting reducer from slice
export default studentSlice.reducer;
