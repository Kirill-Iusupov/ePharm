import { configureStore } from "@reduxjs/toolkit"
import mangaListReducer from "./slices/mangaListSlice"
import genresReducer from "./slices/genresSlice"
import mangaDetailReducer from "./slices/mangaDetailSlice"

export const store = configureStore({
    reducer:{
        mangaListReducer,
        genresReducer,
        mangaDetailReducer,
    }
})