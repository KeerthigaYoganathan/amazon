import { createSlice } from "@reduxjs/toolkit";
import { headPhonesArr } from "./JsonData/HeadPhones";
import {smartPhonesArr} from './JsonData/Mobiles';

export const slice = createSlice({
  name: "sample",
  initialState: {
     
    userTypedValue:null,
    productData: {
        headPhones: headPhonesArr,
        smartPhones: smartPhonesArr,
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