import { getAllBlogCategories } from '@/app/blog/actions'
import { TCategory } from '@/app/blog/types'
import Link from 'next/link'
import React from 'react'

export const dynamic = 'force-dynamic';

export default async function BlogLayout({ children, currentPath }: { children: React.ReactNode, currentPath?: string }) {
  const { data }: { data: TCategory[] } = await getAllBlogCategories()

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex flex-col'>
        <div className='flex mb-8 overflow-x-auto scrollbar-none'>
          <div className='whitespace-nowrap'>
            {data && data.map((category, index) => (
              <div key={index} className='inline-block'>
                <Link href={`/blog/${category.slug}`} className={`underline ${currentPath === `/blog/${category.slug}` && `text-indigo-600`}`}>{category.name}</Link>
                {index !== (data.length - 1) && (
                  <span className='px-2 text-zinc-500'>|</span>
                )}
              </div>
            ))}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
