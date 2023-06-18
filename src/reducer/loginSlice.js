import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const loginSlice = createSlice({
    name: 'login',
    initialState: null,
    reducers: {
        addLogin: (state, action) => {
            const newLogin = action.payload;
            return newLogin;
        },
        reset: (state, action) => {
            return initialState;
        },
    },
});

export const { reset, addLogin } = loginSlice.actions;
export default loginSlice.reducer;