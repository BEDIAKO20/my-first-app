import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../reducers/reducer";
configureStore({
  reducer: {
    students: studentSlice,
  },
});

export default configureStore;
