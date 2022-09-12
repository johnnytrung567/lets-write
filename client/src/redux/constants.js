export const API_URL =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:5000/api'
        : 'https://lets-write-server.onrender.com/api'

export const LOCAL_STORAGE_TOKEN_NAME = 'lets-write-token'

export const LOCAL_STORAGE_THEME_NAME = 'lets-write-theme'
