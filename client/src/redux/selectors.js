import { createSelector } from '@reduxjs/toolkit'

// User selectors
export const userSelector = state => state.users.user
export const userLoadingSelector = state => state.users.loading
export const userMessageSelector = state => state.users.message

// Posts selectors
export const postsSelector = state => state.posts.posts
export const currentPostSelector = state => state.posts.currentPost
export const postLoadingSelector = state => state.posts.loading
export const postUpdateModeSelector = state => state.posts.updateMode

export const postSearchSelector = state => state.posts.filters.search
export const postCatFilterdSelector = state => state.posts.filters.cat
export const postUserFilteredSelector = state => state.posts.filters.user

export const postsFilteredSelector = createSelector(
    postsSelector,
    postSearchSelector,
    postCatFilterdSelector,
    postUserFilteredSelector,
    (posts, search, cat, user) => {
        // if (!search && posts) return posts
        // if (search && posts)
        //     return posts.filter(post => {
        //         return post.title.includes(search)
        //     })

        if (posts.length) {
            let postsFiltered = posts
            if (cat)
                postsFiltered = postsFiltered.filter(post =>
                    post.categories.includes(cat)
                )

            if (user) {
                postsFiltered = postsFiltered.filter(
                    post => post.user.username === user
                )
            }

            if (search)
                postsFiltered = postsFiltered.filter(post =>
                    post.title.toLowerCase().includes(search.toLowerCase())
                )

            return postsFiltered
        }
        return []
    }
)

// Categories selectors
export const categoriesSelector = state => state.categories.categories
export const categoriesLoadingSelector = state => state.categories.loading

// Theme selectors
export const themeSelector = state => state.theme.theme
export const modalShowSelector = state => state.theme.isModalShow
