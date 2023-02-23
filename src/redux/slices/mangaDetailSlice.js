import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    mangaInfo:{},
    isLoading: false,
    error:''
}

export const fetchMangaDetail = createAsyncThunk(
    'mangaDetail/fetchMangaDetail',
    async function(id) {

        const response = await axios.get(`http://134.122.75.14:8666/api/v1/manga/${id}`)
        
        const data = response.data

        return data
    }
)


const mangaDetailSlice = createSlice({
    name: "mangaDetail",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchMangaDetail.pending, state=>{
            state.isLoading = !state.isLoading
        },
        builder.addCase(fetchMangaDetail.fulfilled, (state, action)=>{
            state.isLoading = !state.isLoading
            state.mangaInfo = action.payload
        })
        )
    }

})


export default mangaDetailSlice.reducer