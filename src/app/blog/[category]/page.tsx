import React from 'react'
import BlogLayout from '@/app/components/blog/blog-layout'
import { getFilteredBlogPosts } from '../actions'
import BlogPosts from '@/app/components/blog/blog-posts'

export default async function BlogList({ params: asyncParams }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await asyncParams
  const { data: filteredBlogPosts } = await getFilteredBlogPosts(resolvedParams.category)

  const currentPath = `/blog/${resolvedParams.category || ''}`

  return (
    <BlogLayout currentPath={currentPath}>
      <BlogPosts posts={filteredBlogPosts} />
    </BlogLayout>
  )
}