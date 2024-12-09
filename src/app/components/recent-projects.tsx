import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const RecentProjects = () => {
  const recentProjects = [
    {
      title: "Indie Action Club",
      description: "A community for builders that get things done.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "iCodeThis",
      description: "Improve your coding skills by building projects",
      image: "/placeholder.svg?height=200&width=300"
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
            <Link key={index} href="#" className='group w-[calc(50%-8px)]'>
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
