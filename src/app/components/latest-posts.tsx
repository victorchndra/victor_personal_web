import React from 'react'
import { getAllBlogPosts } from '../blog/actions'
import PostsHydrationWrapper from './posts-hydration-wrapper'

export const LatestPosts = async () => {
  const { data } = await getAllBlogPosts()

  if (!data || !Array.isArray(data)) return []

  const ssrPosts = (data || []).slice(0, 3)

  return <PostsHydrationWrapper ssrPosts={ssrPosts} />
}
