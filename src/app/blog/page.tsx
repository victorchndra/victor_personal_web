import React from 'react'
import BlogLayout from '../components/blog/blog-layout'
// import BlogPosts from '../components/blog/blog-posts'
import { getAllBlogPosts } from './actions'
import HydrationWrapper from '../components/blog/hydration-wrapper'

export const dynamic = 'force-dynamic';

export default async function BlogCategory() {
  const { data: latestPosts } = await getAllBlogPosts();

  if (!Array.isArray(latestPosts) || latestPosts.length === 0) return [];

  return (
    <BlogLayout>
      {/* <BlogPosts posts={lastestPosts} /> */}
      <HydrationWrapper ssrData={latestPosts || []} />
    </BlogLayout>
  )
}
