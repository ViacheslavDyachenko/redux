import { configureStore } from '@reduxjs/toolkit'
import postsReduser from '../store/posts/posts'

export default configureStore({
  reducer: {
    posts: postsReduser,
  },
})
