import React from 'react'
// import DOMPurify from 'dompurify'
import { getAllBlogPosts } from '../blog/actions'
import PostsHydrationWrapper from './posts-hydration-wrapper'

export const LatestPosts = async () => {
  const { data } = await getAllBlogPosts()

  const ssrPosts = (data || []).slice(0, 3)

  return <PostsHydrationWrapper ssrPosts={ssrPosts} />
}
