import { TCategory } from '@/app/project/types'
import { getAllProjectCategories } from '@/app/project/actions'
import Link from 'next/link'
import React from 'react'

export default async function ProjectLayout({ children }: { children: React.ReactNode }) {
  const { data }: { data: TCategory[] } = await getAllProjectCategories()

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex flex-col'>
        <div className='flex mb-8'>
          {data && data.map((category, index) => (
            <div key={index}>
              <Link href={`/project/${category.slug}`} className='underline'>{category.name}</Link>
              {index !== (data.length - 1) && (
                <span className='px-4'>|</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {children}
        </div>
      </div>
    </section>
  )
}
