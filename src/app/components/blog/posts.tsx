import Link from 'next/link'
import React from 'react'

export default function Posts({ posts }:
  {
    posts: {
      category: { slug: string },
      slug: string,
      date: string,
      title: string,
      description: string
    }[]
  }) {
  return (
    <>
      {posts.map((post, index) => (
        <Link key={index} href={`/blog/${post.category.slug}/${post.slug}`} className='group w-full'>
          <div>
            <time className='text-xs text-zinc-500'>{post.date}</time>
            <h3 className='font-medium group-hover:underline mb-2'>{post.title}</h3>
            <p className='text-sm text-zinc-500'>{post.description}</p>
          </div>
          {index !== (posts.length - 1) && (
            <hr className='my-4' />
          )}
        </Link>
      ))}
    </>
  )
}
