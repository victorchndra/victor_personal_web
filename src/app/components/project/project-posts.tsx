import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectPosts({ projects }: {
  projects: {
    title: string,
    description: string,
    slug: string,
    thumbnail: string,
    category: {
      name: string,
      slug: string
    },
  }[]
}) {
  return (
    <>
      {projects.map((post, index) => (
        <Link key={index} href={`/project/${post.category.slug}/${post.slug}`} className='group w-[calc(50%-8px)] md:mb-0 mb-4'>
          <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden mb-2'>
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={300}
              height={200}
              className='object-cover w-full h-full relative'
            />
          </div>
          <h3 className='font-medium group-hover:underline mb-2'>{post.title}</h3>
          <p className='text-sm text-zinc-500'>{post.description}</p>
        </Link>
      ))}
    </>
  )
}
