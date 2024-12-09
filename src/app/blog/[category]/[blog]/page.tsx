import React from 'react'

export default async function Blog({ params }: { params: Promise<{ blog: string }> }) {
  const postSlug = (await params).blog

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full'>
        {postSlug}
      </div>
    </section>
  )
}