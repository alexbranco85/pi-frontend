import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer';

// Configuração do redux-persist
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Criação da store
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunkMiddleware],
});

// Configuração da persistência
const persistor = persistStore(store);

export { store, persistor };