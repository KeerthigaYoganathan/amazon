import { createSlice } from "@reduxjs/toolkit";
import { headPhonesArr } from "./JsonData/HeadPhones";

export const slice = createSlice({
  name: "sample",
  initialState: {
    arr: [],
    editIndex: null,
    jsonData: {
        headPhones: headPhonesArr,
        
    },
  },
  reducers: {
    updateReduxState: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export const { updateReduxState } = slice.actions;
export default slice.reducer;