import { createSlice, current } from "@reduxjs/toolkit";

const initialState = JSON.parse(
  typeof sessionStorage !== "undefined"
    ? sessionStorage.getItem("cartitem")
    : "[]"
) || [];

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload);

      if (typeof sessionStorage !== "undefined") {
        let cartitems = JSON.stringify(current(state));
        sessionStorage.setItem("cartitem", cartitems);
      }
    },
    removeItems: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);

      if (typeof sessionStorage !== "undefined") {
        const cartItems = JSON.stringify(newState);
        sessionStorage.setItem("cartitem", cartItems);
      }

      return newState;
    },
    reset: () => {
      const emptyArray = [];
      const emptyArrayString = JSON.stringify(emptyArray);

      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem("cartitem", emptyArrayString);
      }

      return emptyArray;
    },
  },
});

export default CartSlice.reducer;
export const { addItems, removeItems, reset } = CartSlice.actions;
