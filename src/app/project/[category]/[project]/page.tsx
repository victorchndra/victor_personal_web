import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function ProjectDetail({ params }: { params: Promise<{ project: string }> }) {
  const projectSlug = (await params).project

  const projects = [
    {
      date: 'November 12, 2024',
      title: "Indie Action Club",
      slug: 'indie-action-club',
      description: "A community for builders that get things done.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category:
      {
        name: 'Personal',
        slug: 'personal',
      },
    },
    {
      date: 'November 9, 2024',
      title: "iCodeThis",
      slug: 'icodethis',
      description: "Improve your coding skills by building projects",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category:
      {
        name: 'Personal',
        slug: 'personal',
      },
    },
  ]

  const getProject = projects.find(project => project.slug === projectSlug)

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex-col'>
        <Link href="/project" className='underline'>← back to project</Link>
        <div className='flex flex-col mt-12 space-y-3 md:space-y-2'>
          <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden mb-2'>
            <Image
              src={getProject?.thumbnail ?? "/placeholder.svg"}
              alt={getProject?.title ?? "undefined image"}
              width={300}
              height={200}
              className='object-cover w-full h-full relative'
            />
          </div>
          <span className='text-sm text-zinc-500'>{getProject?.date}</span>
          <h1 className='text-xl font-bold'>{getProject?.title}</h1>
          <p>{getProject?.description}</p>
        </div>
      </div>
    </section>
  )
}