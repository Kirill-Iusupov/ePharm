import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    mangaList:[],
    isLoading: false,
    error:''
}

export const getMangaList = createAsyncThunk(
    'mangaList/getMangaList',
    async function() {

        const response = await axios.get('http://134.122.75.14:8666/api/v1/manga/?limit=12')
        
        const data = response.data

        return data
    }
)


const mangaListSlice = createSlice({
    name: "mangaList",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getMangaList.pending, (state) =>{
            state.isLoading = !state.isLoading
        },
        builder.addCase(getMangaList.fulfilled, (state, action)=>{
            state.isLoading = !state.isLoading
            state.mangaList = action.payload.results
        })
    )
    }

})


export default mangaListSlice.reducer