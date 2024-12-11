import Image from 'next/image'
// import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { getAllBlogPosts, getBlogPost } from '../../actions'
import DOMPurify from 'isomorphic-dompurify'
import moment from 'moment'

// Server Static Generation (SSG)
export async function generateStaticParams() {
  const { data: posts } = await getAllBlogPosts()

  return posts.map((post: { category: { slug: string }, blog: string }) => ({
    category: post.category.slug,
    blog: post.blog
  }))
}

export default async function Blog({ params }: { params: Promise<{ category: string, blog: string }> }) {
  const { category, blog } = await params
  const { data: post } = await getBlogPost(category, blog)

  const sanitizedContent = DOMPurify.sanitize(post.content)

  return (
    <>
      {/* SEO Metadata */}
      {/* <Head>
        <title>{post.name} - {post.category.name} | My Blog</title>
        <meta name="description" content={post.excerpt || "Read this amazing blog post"} />
        <meta name="keywords" content={`blog, ${post.category.name}, ${post.name}`} />
        <link rel="canonical" href={`https://mywebsite.com/blog/${category}/${blog}`} />
      </Head> */}

      <section className='flex justify-center'>
        <div className='max-w-[570px] w-full flex-col'>
          <Link href="/blog" className='underline'>← back to blog</Link>
          <div className='flex flex-col mt-12 space-y-3 md:space-y-2 elementToFadeInAndOut'>
            {post && (
              <span className='text-sm text-white px-2 py-0.5 font-bold bg-violet-600 w-fit uppercase'>
                {post.category.name}
              </span>
            )}
            <span className='text-sm text-zinc-500'>{post && moment(post.created_at).format('MMMM DD, YYYY')}</span>
            <h1 className='text-xl font-bold'>{post && post.name}</h1>
            {post ? post.thumbnail && (
              <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden mb-2'>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}/${post.thumbnail}`}
                  alt={post.name ?? "undefined image"}
                  width={300}
                  height={200}
                  className='object-cover w-full h-full relative'
                />
              </div>
            ) : (
              <div className='group w-full'>
                <div className='space-y-2 animate-pulse'>
                  <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden'></div>
                  <div className='bg-gray-200 h-4 w-2/3 rounded-md'></div>
                  <div className='bg-gray-200 h-4 w-full rounded-md'></div>
                </div>
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} className='prose' />
          </div>
        </div>
      </section >
    </>
  )
}