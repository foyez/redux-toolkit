import React, { useEffect } from 'react'

import { Post } from '../components/post.component'

import { connect } from 'react-redux'
import { fetchPostsAsync } from '../redux/posts/posts.actions'
import { createStructuredSelector } from 'reselect'
import {
  selectPostCollection,
  selectIsFetching,
  selectErrorMessage,
} from '../redux/posts/posts.selectors'

const PostsPage = ({ postCollection, isFetching, errorMessage, dispatch }) => {
  useEffect(() => {
    dispatch(fetchPostsAsync())
  }, [dispatch])

  const renderPosts = () => {
    if (isFetching) return <p>Loading posts...</p>
    if (errorMessage) return <p>Unable to display posts. {errorMessage}</p>

    return postCollection.slice(0, 10).map(post => <Post key={post.id} post={post} />)
  }

  return (
    <section className="post-excerpt">
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
  postCollection: selectPostCollection,
  isFetching: selectIsFetching,
  errorMessage: selectErrorMessage,
})

export default connect(mapStateToProps)(PostsPage)
