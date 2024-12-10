import { getAllProjectCategories } from '@/app/server/actions'
import { TCategory } from '@/app/server/types'
import Link from 'next/link'
import React from 'react'

export default async function ProjectLayout({ children }: { children: React.ReactNode }) {
  const { data }: { data: TCategory[] } = await getAllProjectCategories()

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex flex-col'>
        <div className='flex space-x-4 mb-10'>
          {data.map((category, index) => (
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
