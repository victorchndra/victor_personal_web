import Link from 'next/link'
import React from 'react'

export const LatestPosts = () => {
  const lastestPosts = [
    {
      date: 'December 4, 2024',
      title: 'How to use Laravel Pint in VSCode?',
      description: 'Laravel Pint is an opinionated PHP code style fixer based on PHP-CS-Fixer. It helps maintain consistent code style and...',
      thumbnail: '/placeholder.svg?height=200&width=300',
    },
    {
      date: 'November 18, 2024',
      title: 'How to Extract Audio from MKV Files Using FFmpeg',
      description: 'Laravel Pint is an opinionated PHP code style fixer based on PHP-CS-Fixer. It helps maintain consistent code style and...',
      thumbnail: '/placeholder.svg?height=200&width=300',
    },
    {
      date: 'November 9, 2024',
      title: "AI Won't Replace Developers - Here's Why We'll Thrive Instead",
      description: 'First time I saw AI generating code, I panicked. Not gonna lie, felt like those rights in 2014 when I was struggling to...',
      thumbnail: '/placeholder.svg?height=200&width=300',
    },
  ]

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full'>
        <div className='flex justify-between mb-6 items-center'>
          <h2 className='text-lg font-medium'>Latest Posts</h2>
          <Link href="/blog" className='underline decoration-wavy'>See all posts</Link>
        </div>
        {lastestPosts.map((post, index) => (
          <>
            <div className='flex'>
              <div className="relative">
                <div className="relative rounded-full h-3 w-3 bg-gradient-to-r from-violet-600 to-purple-600 dark:bg-white/90 mt-2">
                  {index === 0 && (
                    <div className='absolute animate-ping rounded-full h-3 w-3 bg-gradient-to-r from-violet-600 to-purple-600 dark:bg-white/90'></div>
                  )}
                </div>
                <div className='ml-1 w-[3px] bg-slate-950/10 dark:bg-white/10 h-full -mt-6'></div>
              </div>
              <article key={index} className='space-y-1 pl-3 mb-5'>
                <time className='text-sm text-zinc-500'>{post.date}</time>
                <h3 className='font-medium hover:underline'>{post.title}</h3>
                <p className='text-sm text-zinc-500'>{post.description}</p>
              </article>
            </div>
          </>
        ))}
        <Link href="/blog" className='inline-block mt-2 text-sm underline'>
          See more posts
        </Link>
      </div>
    </section>
  )
}
