import { createSlice } from "@reduxjs/toolkit";
import getConfig from "../../utils/getConfig";
import axios from "axios";
import { setIsloading } from "./isLoading.Slice";

export const mySlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCart } = mySlice.actions;

export const getCart = () => (dispatch) => {
  dispatch(setIsloading(true));
  return axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
    .then((res) => dispatch(setCart(res.data.data.cart.products)))
    .finally(() => dispatch(setIsloading(false)));
};

export default mySlice.reducer;