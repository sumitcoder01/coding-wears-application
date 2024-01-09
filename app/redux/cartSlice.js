import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart:
    typeof window !== "undefined" && window.localStorage
      ? JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart"))
        : []
      : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let found = false;
      let myCart = state.cart;
      let item = action.payload;
      for (let index = 0; index < myCart.length; index++) {
        if (myCart[index].slug === item.slug && myCart[index].color === item.color && myCart[index].size === item.size) {
          myCart[index].quantity += item.quantity;
          found = true;
          break;
        }
      }
      if (!found) {
        myCart = [...myCart, item];
      }
      state.cart = myCart;
      localStorage.setItem("cart", JSON.stringify(myCart));
    },
    buyNow: (state, action) => {
      let myCart = [{ ...action.payload }];
      state.cart = myCart;
      localStorage.setItem("cart", JSON.stringify(myCart));
    },
    removeFromCart: (state, action) => {
      let myCart = state.cart;
      myCart.splice(action.payload, 1);
      state.cart = myCart;
      localStorage.setItem("cart", JSON.stringify(myCart));
    },
    incrementByOne: (state, action) => {
      let myCart = state.cart;
      myCart[action.payload].quantity += 1;
      state.cart = myCart;
      localStorage.setItem("cart", JSON.stringify(myCart));
    },
    decrementByOne: (state, action) => {
      let myCart = state.cart;
      myCart[action.payload].quantity -= 1;
      if (myCart[action.payload].quantity <= 0) {
        myCart.splice(action.payload, 1);
      }
      state.cart = myCart;
      localStorage.setItem("cart", JSON.stringify(myCart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementByOne,
  decrementByOne,
  buyNow,
} = cartSlice.actions;

export default cartSlice.reducer;
