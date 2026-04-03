import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'

import rawStorage from "redux-persist/lib/storage";
import cartReducer from "../modules/customer/Cart/Slicer/cartSlice"
import UiReducer from "../modules/customer/Product/Slice/UiSlice"
const storage = rawStorage.default || rawStorage;


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    cart: cartReducer,
    ui: UiReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export default store