'use client'

import Link from 'next/link'
import React from 'react'

export default function BlogLayout({ children }: { children: React.ReactNode }) {

  const categories = [
    {
      name: 'Technology',
      slug: 'technology',
    },
    {
      name: 'Journey',
      slug: 'journey',
    },
    {
      name: 'Lifestyle',
      slug: 'lifestyle',
    },
  ]

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex flex-col'>
        <div className='flex space-x-4 mb-10'>
          {categories.map((category, index) => (
            <Link key={index} href={`/blog/${category.slug}`} className='px-3 py-1 border border-black'>{category.name}</Link>
          ))}
        </div>
        {children}
      </div>
    </section>
  )
}
