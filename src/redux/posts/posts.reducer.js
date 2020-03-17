import actionTypes from './posts.types'

const INITIAL_STATE = {
  postCollection: [],
  isFetching: false,
  errorMessage: '',
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_START:
      return { ...state, isFetching: true }
    case actionTypes.FETCH_POSTS_SUCCESS:
      return { postCollection: action.payload, isFetching: false, errorMessage: '' }
    case actionTypes.FETCH_POSTS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload }
    default:
      return state
  }
}

export default postsReducer
