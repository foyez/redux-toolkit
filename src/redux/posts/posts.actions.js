import axios from 'axios'
import actionTypes from './posts.types'

export const fetchPostStart = () => ({
  type: actionTypes.FETCH_POSTS_START,
})

export const fetchPostSuccess = posts => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
})

export const fetchPostFailure = errorMessage => ({
  type: actionTypes.FETCH_POSTS_FAILURE,
  payload: errorMessage,
})

export const fetchPostsAsync = () => async dispatch => {
  dispatch(fetchPostStart())

  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch(fetchPostSuccess(res.data))
  } catch (err) {
    dispatch(fetchPostFailure(err.message))
  }
}
