import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../reducer/cartSlice';
import loginSlice from '../reducer/loginSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;