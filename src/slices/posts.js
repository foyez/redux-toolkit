import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  postCollection: [],
  loading: false,
  errorMessage: '',
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart: state => {
      state.loading = true
    },
    fetchPostsSuccess: (state, { payload }) => {
      state.postCollection = payload
      state.loading = false
      state.errorMessage = ''
    },
    fetchPostsFailure: (state, { payload }) => {
      state.loading = false
      state.errorMessage = payload
    },
  },
})

const { actions, reducer } = postsSlice
export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = actions
export const selectPosts = state => state.posts

export const fetchPostsAsync = () => async dispatch => {
  dispatch(fetchPostsStart())

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    dispatch(fetchPostsSuccess(data))
  } catch (error) {
    dispatch(fetchPostsFailure())
  }
}

export default reducer
