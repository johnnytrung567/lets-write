import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../constants'

const initialState = {
    loading: false,
    categories: [],
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.pending, state => {
                state.loading = true
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false
                state.categories = action.payload
            })
    },
})

// Thunk

// Fetch all categories
export const fetchCategories = createAsyncThunk(
    'posts/fetchCategories',
    async () => {
        const res = await axios.get(`${API_URL}/categories`)
        return res.data.categories
    }
)

export default categoriesSlice.reducer
