import React from 'react'
import BlogLayout from '../components/blog/blog-layout'
import BlogPosts from '../components/blog/blog-posts'
import { getAllBlogPosts } from './actions'

export default async function BlogCategory() {
  const { data: lastestPosts } = await getAllBlogPosts()

  // const [lastestPosts, setLastestPosts] = useState<TContent[] | null>()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await getAllBlogPosts()

  //     setLastestPosts(data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <BlogLayout>
      <BlogPosts posts={lastestPosts} />
    </BlogLayout>
  )
}
