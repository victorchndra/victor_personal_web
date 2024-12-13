import Image from 'next/image'
import { TContent } from '@/app/project/types'
import Link from 'next/link'
import React from 'react'

export default function ProjectPosts({ projects }: { projects: TContent[] | null | undefined }) {
  return (
    <>
      {projects && projects.length > 0 ? projects.map((post, index) => (
        <Link key={index} href={`/project/${post.category.slug}/${post.slug}`} className='group w-[calc(50%-8px)] mb-4 elementToFadeInAndOut'>
          <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden mb-2'>
            <Image
              unoptimized
              src={`https://admin.victor-chandra.com/storage/${post.thumbnail}`}
              alt={post.name}
              width={300}
              height={200}
              className='object-cover w-full h-full relative'
            />
          </div>
          <h3 className='font-medium group-hover:underline mb-2'>{post.name}</h3>
          <p className='text-sm text-zinc-500'>{post.description}</p>
        </Link>
      )) : (
        <div className='text-zinc-500 text-sm flex w-full justify-center italic elementToFadeInAndOut'>no project found</div>
      )}
    </>
  )
}
