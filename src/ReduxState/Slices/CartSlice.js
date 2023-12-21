import { createSlice, current } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(sessionStorage.getItem("cartitem")) || [],
  reducers: {
    addItems: (state, action) => {
      
      state.push(action.payload);
      
      let cartitems = JSON.stringify(current(state));
      sessionStorage.setItem("cartitem", cartitems);
      
    },
    removeItems : (state,action) =>{
      
      const newState = state.filter((item) => item.id != action.payload);
      const cartItems = JSON.stringify(newState);
      sessionStorage.setItem("cartitem", cartItems);
      return newState
    },
    reset : () => {
      const emptyArray = [];
      const emptyArrayString = JSON.stringify(emptyArray);
      sessionStorage.setItem("cartitem", emptyArrayString);
      return emptyArray
    }
    
  },
});

export default CartSlice.reducer;
export const { addItems ,removeItems,reset } = CartSlice.actions;
