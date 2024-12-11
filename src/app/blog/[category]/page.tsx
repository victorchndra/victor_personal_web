// 'use client'
import React from 'react'
import BlogLayout from '@/app/components/blog/blog-layout'
// import { TContent } from '../types'
import { getFilteredBlogPosts } from '../actions'
import BlogPosts from '@/app/components/blog/blog-posts'

export default async function BlogList({ params: asyncParams }: { params: { category: string } }) {
  const resolvedParams = await asyncParams
  const { data: filteredBlogPosts } = await getFilteredBlogPosts(resolvedParams.category)

  return (
    <BlogLayout>
      <BlogPosts posts={filteredBlogPosts} />
    </BlogLayout>
  )
}