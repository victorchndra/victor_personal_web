// 'use client'
import React from 'react'
import BlogLayout from '@/app/components/blog/blog-layout'
import Posts from '@/app/components/blog/blog-posts'
// import { TContent } from '../types'
import { getFilteredBlogPosts } from '../actions'

export default async function BlogList({ params }: { params: { category: string } }) {

  const { data: lastestPosts } = await getFilteredBlogPosts(params.category)

  // const [lastestPosts, setLastestPosts] = useState<TContent[] | null>()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const resolvedParams = await asyncParams

  //     const { data } = await getFilteredBlogPosts(resolvedParams.category)

  //     setLastestPosts(data)
  //   }
  //   fetchData()
  // }, [asyncParams])

  return (
    <BlogLayout>
      <Posts posts={lastestPosts} />
    </BlogLayout>
  )
}