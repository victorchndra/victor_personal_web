import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DOMPurify from 'isomorphic-dompurify'
import { getProjectPost } from '../../actions'
import moment from 'moment'

export default async function ProjectDetail({ params }: { params: Promise<{ category: string, project: string }> }) {
  const { category, project } = await params
  const { data: post } = await getProjectPost(category, project)

  const sanitizedContent = DOMPurify.sanitize(post.content)

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex-col'>
        <Link href="/project" className='underline'>← back to project</Link>
        <div className='flex flex-col mt-12 space-y-3 md:space-y-2 elementToFadeInAndOut'>
          {post && (
            <span className='text-sm text-white px-2 py-0.5 font-bold bg-violet-600 w-fit uppercase'>
              {post.category.name}
            </span>
          )}
          <span className='text-sm text-zinc-500'>{post && moment(post.created_at).format('MMMM DD, YYYY')}</span>
          <h1 className='text-xl font-bold'>{post.name}</h1>
          {post ? post.thumbnail && (
            <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden mb-2'>
              {/* <Image
                  src={post.thumbnail ?? "/placeholder.svg"}
                  alt={post.name ?? "undefined image"}
                  width={300}
                  height={200}
                  className='object-cover w-full h-full relative'
                /> */}
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
    </section>
  )
}