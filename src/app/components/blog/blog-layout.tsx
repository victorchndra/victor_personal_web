'use client'
import { getAllBlogCategories } from '@/app/blog/actions'
import { TCategory } from '@/app/blog/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function BlogLayout({ children }: { children: React.ReactNode }) {

  const [blogCategories, setBlogCategories] = useState<TCategory[] | null>()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllBlogCategories()

      setBlogCategories(data)
    }
    fetchData()
  }, [])

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex flex-col'>
        <div className='flex mb-8'>
          {blogCategories ? blogCategories.map((category, index) => (
            <div key={index}>
              <Link href={`/blog/${category.slug}`} className='underline'>{category.name}</Link>
              {index !== (blogCategories.length - 1) && (
                <span className='px-4'>|</span>
              )}
            </div>
          )) : (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='animate-pulse flex'>
                <div className='bg-gray-200 h-6 w-20 rounded-md'></div>
                {index !== Array.length + 1 && (
                  <div className='bg-gray-200 h-6 w-0.5 mx-2'></div>
                )}
              </div>
            ))
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
