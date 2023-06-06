import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import complaintSlice from "./complaint/complaintSlice";


// Configuring Redux Persist
const rootReducer = combineReducers({
    complaint: complaintSlice
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['complaint'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)
