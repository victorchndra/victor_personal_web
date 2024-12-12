import React from 'react'
import BlogLayout from '../components/blog/blog-layout'
// import BlogPosts from '../components/blog/blog-posts'
import { getAllBlogPosts } from './actions'
import HydrationWrapper from '../components/blog/hydration-wrapper'

export default async function BlogCategory() {
  let lastestPosts = []
  try {
    const { data } = await getAllBlogPosts()
    lastestPosts = data || []
  } catch (error) {
    console.error("Failed to fetch blog posts:", error)
    lastestPosts = []
  }

  return (
    <BlogLayout>
      {/* <BlogPosts posts={lastestPosts} /> */}
      <HydrationWrapper ssrData={lastestPosts} />
    </BlogLayout>
  )
}
