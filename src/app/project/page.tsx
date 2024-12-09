import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCategory = () => {
  const categories = [
    {
      name: 'Personal',
      slug: 'personal',
    },
    {
      name: 'Experiment',
      slug: 'experiment',
    },
  ]

  const projects = [
    {
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
      title: "iCodeThis",
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
      <div className='max-w-[570px] w-full flex flex-col'>
        <div className='flex space-x-4 my-6'>
          {categories.map((category, index) => (
            <Link key={index} href={`/project/${category.slug}`} className='px-3 py-1 border border-black'>{category.name}</Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
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
        </div>
      </div>
    </section>
  )
}

export default ProjectCategory