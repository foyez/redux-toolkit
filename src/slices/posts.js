import Axios from 'axios'
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
    fetchPostsSuccess: (state, { payload: { postsCollection } }) => {
      state.postCollection = postsCollection
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
    const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')

    dispatch(fetchPostsSuccess({ postsCollection: res.data }))
  } catch (error) {
    dispatch(fetchPostsFailure(error.message))
  }
}

export default reducer
