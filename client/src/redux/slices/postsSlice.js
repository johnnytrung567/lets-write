import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../constants'

const initialState = {
    loading: false,
    posts: [],
    currentPost: undefined,
    updateMode: false,
    filters: {
        search: '',
        cat: '',
        user: '',
    },
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setUpdateMode: (state, action) => {
            state.updateMode = action.payload
        },
        searchPost: (state, action) => {
            state.filters.search = action.payload
        },
        filterPostByCat: (state, action) => {
            state.filters.cat = action.payload
        },
        filterPostByUser: (state, action) => {
            state.filters.user = action.payload
        },
    },
    extraReducers: builder => {
        builder
            // Get all posts
            .addCase(fetchPosts.pending, state => {
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })

            // Get post by id
            .addCase(fetchPostById.pending, state => {
                state.loading = true
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.loading = false
                state.currentPost = action.payload
            })

            // Add post
            .addCase(addPost.pending, state => {
                state.loading = true
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload.success)
                    state.posts.unshift(action.payload.post)
            })

            // Update post
            .addCase(updatePost.pending, state => {
                state.loading = true
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload.success)
                    state.posts = state.posts.filter(post => {
                        if (post._id === action.payload.post._id)
                            post = action.payload.post
                    })
            })

            // Delete post
            .addCase(deletePost.pending, state => {
                state.loading = true
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload.success)
                    state.posts = state.posts.filter(
                        post => post._id !== action.payload.post._id
                    )
            })
    },
})

// Thunk

// Fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const res = await axios.get(`${API_URL}/posts`)
    return res.data.posts
})

// Fetch post by id
export const fetchPostById = createAsyncThunk(
    'posts/fetchPostById',
    async id => {
        const res = await axios.get(`${API_URL}/posts/${id}`)
        return res.data.post
    }
)

export const addPost = createAsyncThunk('posts/addPost', async formData => {
    try {
        const res = await axios.post(`${API_URL}/posts`, formData)
        return res.data
    } catch (error) {
        if (error.response.status === 413)
            return { success: false, message: 'File too large' }
        return error.response.data
    }
})

export const updatePost = createAsyncThunk('posts/updatePost', async data => {
    try {
        const res = await axios.put(
            `${API_URL}/posts/${data.id}`,
            data.formData
        )
        return res.data
    } catch (error) {
        if (error.response.status === 413)
            return { success: false, message: 'File too large' }
        return error.response.data
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async id => {
    try {
        const res = await axios.delete(`${API_URL}/posts/${id}`)
        return res.data
    } catch (error) {
        return error.response.data
    }
})

export const { setUpdateMode, searchPost, filterPostByCat, filterPostByUser } =
    postsSlice.actions

export default postsSlice.reducer
