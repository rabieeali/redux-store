import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {state.value = action.payload},
    singleProduct : (state,action)=>{state.value = action.payload}
  },
});

export default productSlice.reducer;
export const { getProduct,singleProduct } = productSlice.actions;
