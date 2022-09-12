import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import postsReducer from './slices/postsSlice'
import categoriesReducer from './slices/categoriesSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        categories: categoriesReducer,
        theme: themeReducer,
    },
})
