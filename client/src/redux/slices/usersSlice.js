import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL, LOCAL_STORAGE_TOKEN_NAME } from '../constants'
import setAuthToken from '../../utils/setAuthToken'

const initialState = {
    loading: false,
    user: null,
    message: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logoutUser: state => {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
            state.user = null
        },
    },
    extraReducers: builder => {
        builder
            // Register
            .addCase(registerUser.pending, state => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                if (!action.payload.success)
                    state.message = action.payload.message
                else {
                    localStorage.setItem(
                        LOCAL_STORAGE_TOKEN_NAME,
                        action.payload.token
                    )
                }
            })

            // Login
            .addCase(loginUser.pending, state => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                if (!action.payload.success)
                    state.message = action.payload.message
                else {
                    localStorage.setItem(
                        LOCAL_STORAGE_TOKEN_NAME,
                        action.payload.token
                    )
                }
            })

            // Load user
            .addCase(loadUser.pending, state => {
                state.loading = true
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.loading = false
                if (!action.payload.success) {
                    state.user = null
                    state.message = action.payload.message
                } else {
                    state.user = action.payload.user
                }
            })

            // Update user
            .addCase(updateUser.pending, state => {
                state.loading = true
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false
                if (!action.payload.success) {
                    state.message = action.payload.message
                } else {
                    state.user = action.payload.user
                    state.message = action.payload.message
                }
            })

            // Delete user
            .addCase(deleteUser.pending, state => {
                state.loading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false
                if (!action.payload.success) {
                    state.message = action.payload.message
                } else {
                    state.user = null
                    state.message = action.payload.message
                }
            })
    },
})

export const registerUser = createAsyncThunk(
    'users/registerUser',
    async formData => {
        try {
            const res = await axios.post(`${API_URL}/auth/register`, formData)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
)

export const loginUser = createAsyncThunk('users/loginUser', async formData => {
    try {
        const res = await axios.post(`${API_URL}/auth/login`, formData)
        return res.data
    } catch (error) {
        return error.response.data
    }
})

export const loadUser = createAsyncThunk('users/loadUser', async () => {
    if (localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME))
        setAuthToken(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME))

    try {
        const res = await axios.get(`${API_URL}/users`)
        return res.data
    } catch (error) {
        setAuthToken(null)
        return error.response.data
    }
})

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async formData => {
        try {
            const res = await axios.put(`${API_URL}/users`, formData)
            return res.data
        } catch (error) {
            if (error.response.status === 413)
                return { success: false, message: 'File too large' }
            return error.response.data
        }
    }
)

export const deleteUser = createAsyncThunk('users/deleteUser', async () => {
    try {
        const res = await axios.delete(`${API_URL}/users`)
        return res.data
    } catch (error) {
        return error.response.data
    }
})

export const { logoutUser } = usersSlice.actions

export default usersSlice.reducer
