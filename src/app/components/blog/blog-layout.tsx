// 'use client'
import { getAllBlogCategories } from '@/app/blog/actions'
import { TCategory } from '@/app/blog/types'
import Link from 'next/link'
import React from 'react'

export default async function BlogLayout({ children }: { children: React.ReactNode }) {

  const { data }: { data: TCategory[] } = await getAllBlogCategories()

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex flex-col'>
        <div className='flex mb-8'>
          {data && data.map((category, index) => (
            <div key={index}>
              <Link href={`/blog/${category.slug}`} className='underline'>{category.name}</Link>
              {index !== (data.length - 1) && (
                <span className='px-4'>|</span>
              )}
            </div>
          ))}
        </div>
        {children}
      </div>
    </section>
  )
}
