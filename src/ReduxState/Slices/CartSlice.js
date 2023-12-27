import { createSlice, current } from "@reduxjs/toolkit";

// Function to check if sessionStorage is available
const isSessionStorageAvailable = () => {
  try {
    return typeof sessionStorage !== "undefined" && sessionStorage !== null;
  } catch (e) {
    return false;
  }
};

// Initial state with sessionStorage check
const initialState =
  isSessionStorageAvailable() &&
  JSON.parse(sessionStorage.getItem("cartitem")) ||
  [];

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload);

      // Check if sessionStorage is available before using it
      if (isSessionStorageAvailable()) {
        let cartitems = JSON.stringify(current(state));
        sessionStorage.setItem("cartitem", cartitems);
      }
    },
    removeItems: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);

      // Check if sessionStorage is available before using it
      if (isSessionStorageAvailable()) {
        const cartItems = JSON.stringify(newState);
        sessionStorage.setItem("cartitem", cartItems);
      }

      return newState;
    },
    reset: () => {
      const emptyArray = [];
      const emptyArrayString = JSON.stringify(emptyArray);

      // Check if sessionStorage is available before using it
      if (isSessionStorageAvailable()) {
        sessionStorage.setItem("cartitem", emptyArrayString);
      }

      return emptyArray;
    },
  },
});

export default CartSlice.reducer;
export const { addItems, removeItems, reset } = CartSlice.actions;
