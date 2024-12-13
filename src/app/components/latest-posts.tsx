import React from 'react'
import { getAllBlogPosts } from '../blog/actions'
import PostsHydrationWrapper from './posts-hydration-wrapper'

export const dynamic = 'force-dynamic';

export async function LatestPosts() {
  const { data } = await getAllBlogPosts()

  if (!data || !Array.isArray(data)) return (<div>No posts available</div>)

  const ssrPosts = (data || []).slice(0, 3)

  return <PostsHydrationWrapper ssrPosts={ssrPosts} />
}
