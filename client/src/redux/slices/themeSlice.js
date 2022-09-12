import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_THEME_NAME } from '../constants'

const initialState = {
    theme: localStorage.getItem(LOCAL_STORAGE_THEME_NAME),
    isModalShow: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        loadTheme: state => {
            if (state.theme === 'dark') document.body.classList.add(state.theme)
        },

        toggleTheme: state => {
            if (state.theme !== 'dark') {
                localStorage.setItem(LOCAL_STORAGE_THEME_NAME, 'dark')
                document.body.classList.add('dark')
                state.theme = 'dark'
            } else {
                localStorage.setItem(LOCAL_STORAGE_THEME_NAME, 'light')
                document.body.classList.remove('dark')
                state.theme = 'light'
            }
        },

        toggleModalShow: state => {
            state.isModalShow = !state.isModalShow
        },
    },
})

export const { loadTheme, toggleTheme, toggleModalShow } = themeSlice.actions

export default themeSlice.reducer
