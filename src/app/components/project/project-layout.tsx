import { TCategory } from '@/app/project/types'
import { getAllProjectCategories } from '@/app/project/actions'
import Link from 'next/link'
import React from 'react'

export default async function ProjectLayout({ children, currentPath }: { children: React.ReactNode, currentPath: string }) {
  const { data }: { data: TCategory[] } = await getAllProjectCategories()

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex flex-col'>
        <div className='flex mb-8 overflow-x-auto scrollbar-none'>
          <div className='whitespace-nowrap'>
            {data && data.map((category, index) => (
              <div key={index} className='inline-block'>
                <Link href={`/project/${category.slug}`} className={`underline ${currentPath === `/project/${category.slug}` && `text-indigo-600`}`}>{category.name}</Link>
                {index !== (data.length - 1) && (
                  <span className='px-2 text-zinc-500'>|</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {children}
        </div>
      </div>
    </section>
  )
}
