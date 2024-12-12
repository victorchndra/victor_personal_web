import React from 'react'
import BlogLayout from '../components/blog/blog-layout'
// import BlogPosts from '../components/blog/blog-posts'
import { getAllBlogPosts } from './actions'
import HydrationWrapper from '../components/blog/hydration-wrapper'
import { TContent } from './types';

export async function getStaticProps() {
  try {
    const { data: latestPosts } = await getAllBlogPosts();

    return {
      props: {
        latestPosts: latestPosts || [], // Fallback to an empty array if undefined
      },
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      props: {
        latestPosts: [],
      },
    };
  }
}

export default async function BlogCategory({ lastestPosts }: { lastestPosts: TContent[] }) {

  return (
    <BlogLayout>
      {/* <BlogPosts posts={lastestPosts} /> */}
      <HydrationWrapper ssrData={lastestPosts} />
    </BlogLayout>
  )
}
