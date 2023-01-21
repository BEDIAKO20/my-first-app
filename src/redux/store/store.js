import { configureStore } from "@reduxjs/toolkit";
import students_reducer from "../reducers/students_reducer";
import teachers_reducer from "../reducers/teachers_reducer";
export default configureStore({
  reducer: {
    student: students_reducer,
    teachers: teachers_reducer,
  },
});
