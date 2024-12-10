import Link from 'next/link'
import React from 'react'

export default function BlogPosts({ posts }:
  {
    posts: {
      category: {
        name: string,
        slug: string
      },
      slug: string,
      date: string,
      title: string,
      description: string
    }[]
  }) {
  return (
    <>
      {posts.length > 0 ? posts.map((post, index) => (
        <Link key={index} href={`/blog/${post.category.slug}/${post.slug}`} className='group w-full elementToFadeInAndOut'>
          <div>
            <time className='text-xs text-zinc-500'>{post.date}</time>
            <h3 className='font-medium group-hover:underline mb-2'>{post.title}</h3>
            <p className='text-sm text-zinc-500'>{post.description}</p>
          </div>
          {index !== (posts.length - 1) && (
            <hr className='my-4' />
          )}
        </Link>
      )) : (
        <span className='italic text-sm text-zinc-500 mx-auto'>- no articles -</span>
      )}
    </>
  )
}
