import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    genres:[],
    isLoading: false,
}


export const fetchGenres = createAsyncThunk(
    "genres/fetchGenres",
    async function () {
        const response = await axios.get("http://134.122.75.14:8666/api/v1/genre/")

        const data = response.data

        return data

    }
)


const genresSlice = createSlice({
    name: "genres",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchGenres.pending, (state) =>{
            state.isLoading = !state.isLoading
        },
        builder.addCase(fetchGenres.fulfilled, (state, action)=>{
            state.isLoading = !state.isLoading
            state.genres = action.payload
        })
    )
    }
})


export default genresSlice.reducer