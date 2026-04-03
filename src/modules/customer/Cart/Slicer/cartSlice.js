import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalProducts: 0,
  totalQuantity: 0,
  totalAmount: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ ADD ITEM
    addItem: (state, action) => {
      const item = action.payload;

      if (!state.cartItems) state.cartItems = [];

      const existingItem = state.cartItems.find(
        (i) => i.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1
        });
      }

      // 🔁 recalc totals (best approach)
      recalcCart(state);
    },

    // ✅ REMOVE ITEM COMPLETELY
    removeItem: (state, action) => {
      const id = action.payload;

      const items = state.cartItems || [];

      state.cartItems = items.filter((item) => item.id !== id);

      recalcCart(state);
    },

    // ✅ INCREASE QTY
    increaseQty: (state, action) => {
      const id = action.payload;

      const item = state.cartItems?.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
      }

      recalcCart(state);
    },

    // ✅ DECREASE QTY
    decreaseQty: (state, action) => {
      const id = action.payload;

      const item = state.cartItems?.find((i) => i.id === id);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== id
        );
      }

      recalcCart(state);
    },

    // ✅ CLEAR CART
    clearCart: (state) => {
      state.cartItems = [];
      state.totalProducts = 0;
      state.totalQuantity = 0;
      state.totalAmount = 0;
    }
  }
});


// 🔥 HELPER FUNCTION (BEST PRACTICE)
const recalcCart = (state) => {
  const items = state.cartItems || [];

  state.totalProducts = items.length;

  state.totalQuantity = items.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  state.totalAmount = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
};

export const {
  addItem,
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;