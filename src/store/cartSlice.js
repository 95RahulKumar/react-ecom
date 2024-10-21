import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const existingItem = state.find(item => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      const index = state.findIndex(item => item._id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.find(item => item._id === action.payload);
      if (item) {
        item.quantity += 1; 
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find(item => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; 
      } else if (item) {
        state.splice(state.indexOf(item), 1);
      }
    }
  },
});

export const getTotalPrice = (state) => {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getCount = (state) => {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
};
export const getQuantityByID = (id) => (state) => {
    const item = state.cart.find(item => item._id === id); // Use find to get a single item
    return item ? item.quantity : 0; // Return quantity or 0 if item is not found
  };
// Action creators are generated for each case reducer function
export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
