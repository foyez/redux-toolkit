import { createSelector } from 'reselect'

const selectPosts = state => state.posts

export const selectPostCollection = createSelector([selectPosts], posts => posts.postCollection)

export const selectIsFetching = createSelector([selectPosts], posts => posts.isFetching)

export const selectErrorMessage = createSelector([selectPosts], posts => posts.errorMessage)
