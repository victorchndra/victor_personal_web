import { TContent } from '@/app/blog/types'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'

export default function BlogPosts({ posts }: { posts: TContent[] | null | undefined }) {

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '')
  }

  return (
    <>
      {posts && posts.length > 0 ? posts.map((post, index) => (
        <Link key={index} href={`/blog/${post.category.slug}/${post.slug}`} className='group w-full elementToFadeInAndOut'>
          <div>
            <time className='text-xs text-zinc-500'>{moment(post.created_at).format('MMMM DD, YYYY')}</time>
            <h3 className='font-medium group-hover:underline mb-2'>{post.name}</h3>
            <p className='text-sm text-zinc-500'>{post.content.length ? `${stripHtml(post.content).substring(0, 140)}...` : `${stripHtml(post.content)}`}</p>
          </div>
          {index !== (posts.length - 1) && (
            <hr className='my-4' />
          )}
        </Link>
      )) : (
        Array.from({ length: 5 }).map((_, index) => (
          <div className='flex' key={index}>
            <div className="rounded-md py-4 w-full mx-auto ">
              <div className="animate-pulse flex flex-col space-y-2">
                <div className='bg-gray-200 h-4 w-1/4 rounded-md'></div>
                <div className='bg-gray-200 h-6 w-2/3 rounded-md'></div>
                <div className='bg-gray-200 h-6 w-full rounded-md'></div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  )
}
