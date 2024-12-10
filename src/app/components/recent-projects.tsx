import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const RecentProjects = () => {
  const recentProjects = [
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

  return (
    <section className='flex justify-center'>
      <div className='w-full max-w-[570px]'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-lg font-medium'>Recent Projects</h2>
          <Link href="/project" className='underline decoration-wavy'>See all projects</Link>
        </div>
        <div className="flex flex-wrap gap-4">
          {recentProjects.map((project, index) => (
            <Link key={index} href={`/project/${project.category.slug}/${project.slug}`} className='group w-[calc(50%-8px)]'>
              <div className='space-y-2'>
                <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden'>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt={project.title}
                    width={300}
                    height={200}
                    className='object-cover w-full h-full'
                  />
                </div>
                <h3 className='font-medium group-hover:underline'>{project.title}</h3>
                <p className='text-sm text-zinc-500'>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
