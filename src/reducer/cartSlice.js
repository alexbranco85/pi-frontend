import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            return [...state, newItem];
        },
        removeFromCart: (state, action) => {
            const skuToRemove = action.payload;
            return state.filter(item => item.sku !== skuToRemove);
        },
        reset: (state, action) => {
            return initialState;
        },
    },
});

export const { addToCart, reset, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;