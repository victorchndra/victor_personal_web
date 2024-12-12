import React from 'react'
import BlogLayout from '@/app/components/blog/blog-layout'
import { getAllBlogPosts, getFilteredBlogPosts } from '../actions'
import BlogPosts from '@/app/components/blog/blog-posts'

export async function generateStaticParams() {
  const { data: posts } = await getAllBlogPosts();

  if (!Array.isArray(posts) || posts.length === 0) return [];

  return posts.map((category: { slug: string }) => ({ category: category.slug }))
}

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