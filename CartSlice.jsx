import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
