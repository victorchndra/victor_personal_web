'use client'

import { TContent } from "@/app/blog/types"
import { useEffect, useState } from "react"
import Link from "next/link"
import moment from "moment"

// HydrationWrapper for Loading Effect
export default function PostsHydrationWrapper({ ssrPosts }: { ssrPosts: TContent[] }) {
  const [hydratedPosts, setHydratedPosts] = useState<TContent[] | null>()

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '')
  }

  useEffect(() => {
    setHydratedPosts(ssrPosts)
  }, [ssrPosts])

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full'>
        <div className='flex justify-between mb-6 items-center'>
          <h2 className='text-lg font-medium'>Latest Posts</h2>
          <Link href="/blog" className='underline decoration-wavy'>See all posts</Link>
        </div>
        {hydratedPosts ? hydratedPosts.map((post, index) => (
          <div className='flex elementToFadeInAndOut' key={index}>
            <div className="relative">
              <div className="relative rounded-full h-3 w-3 bg-gradient-to-r from-violet-600 to-purple-600 dark:bg-white/90 mt-2">
                {index === 0 && (
                  <div className='absolute animate-ping rounded-full h-3 w-3 bg-gradient-to-r from-violet-600 to-purple-600 dark:bg-white/90'></div>
                )}
              </div>
              <div className='ml-1 w-[3px] bg-slate-950/10 dark:bg-white/10 h-full -mt-6 -z-10'></div>
            </div>
            <Link href={`/blog/${post.category.slug}/${post.slug}`} className='space-y-1 pl-3 mb-5'>
              <time className='text-sm text-zinc-500'>{moment(post.created_at).format('MMMM DD, YYYY')}</time>
              <h3 className='font-medium hover:underline'>{post.name}</h3>
              <p className='text-sm text-zinc-500'>{post.content.length ? `${stripHtml(post.content).substring(0, 120)}...` : `${stripHtml(post.content)}`}</p>
              {/* <div className='text-sm text-zinc-500 content' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.length ? `${post.content.substring(0, 100)}...` : post.content) }} /> */}
            </Link>
          </div>
        )) : (
          Array.from({ length: 3 }).map((_, index) => (
            <div className='flex' key={index}>
              <div className='relative'>
                <div className='ml-1 w-[3px] bg-gray-200 dark:bg-white/10 h-full -z-10'></div>
              </div>
              <div className="rounded-md py-4 pl-4 w-full mx-auto ">
                <div className="animate-pulse flex flex-col space-y-2">
                  <div className='bg-gray-200 h-4 w-1/4 rounded-md'></div>
                  <div className='bg-gray-200 h-6 w-2/3 rounded-md'></div>
                  <div className='bg-gray-200 h-6 w-full rounded-md'></div>
                </div>
              </div>
            </div>
          ))
        )}
        <Link href="/blog" className='inline-block mt-2 text-sm underline'>
          See more posts
        </Link>
      </div>
    </section>
  )
}