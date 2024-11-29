import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      title: "iPhone 15",
      price: 1099,
      quantity: 0,
      thumbnail: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
    },
    {
      id: 2,
      title: "iPhone X",
      price: 899,
      quantity: 0,
      thumbnail: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      price: 1249,
      quantity: 0,
      thumbnail: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s9-1.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      price: 280,
      quantity: 0,
      thumbnail: "https://www.mobiledokan.com/media/oppo-f9-starry-purple-official-image.webp",
    },
    {
      id: 5,
      title: "Huawei P30",
      price: 499,
      quantity: 0,
      thumbnail: "https://i.gadgets360cdn.com/products/large/1553681622_635_huawei_p30_lite.jpg",
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
