// 'use client'
import React from 'react'
import BlogLayout from '@/app/components/blog/blog-layout'
import Posts from '@/app/components/blog/blog-posts'
// import { TContent } from '../types'
import { getFilteredBlogPosts } from '../actions'

export default async function BlogList({ params }: { params: { category: string } }) {

  const { data: lastestPosts } = await getFilteredBlogPosts(params.category)

  return (
    <BlogLayout>
      <Posts posts={lastestPosts} />
    </BlogLayout>
  )
}