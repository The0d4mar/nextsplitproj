import { configureStore } from "@reduxjs/toolkit";
import userStoreReducer from './UserStore'

export const store = configureStore({
    reducer:{
        userStore: userStoreReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;