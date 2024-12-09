import Link from 'next/link'
import React from 'react'

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
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

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex flex-col'>
        <div className='flex space-x-4 mb-10'>
          {categories.map((category, index) => (
            <Link key={index} href={`/project/${category.slug}`} className='px-3 py-1 border border-black'>{category.name}</Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {children}
        </div>
      </div>
    </section>
  )
}
