import React from 'react'
import { getAllBlogPosts } from '../blog/actions'
import PostsHydrationWrapper from './posts-hydration-wrapper'

export const dynamic = 'force-dynamic';

export async function LatestPosts() {
  const { data } = await getAllBlogPosts()
  console.log('Fetched data for LatestPosts:', data);

  if (!data || !Array.isArray(data)) return []

  const ssrPosts = (data || []).slice(0, 3)

  return <PostsHydrationWrapper ssrPosts={ssrPosts} />
}
