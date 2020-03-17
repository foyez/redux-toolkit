import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Post } from '../components/post.component'

import { fetchPostsAsync, selectPosts } from '../slices/posts'

const PostsPage = () => {
  const dispatch = useDispatch()
  const { postCollection, isFetching, errorMessage } = useSelector(selectPosts)

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

export default PostsPage
