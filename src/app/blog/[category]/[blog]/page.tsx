import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Blog({ params }: { params: Promise<{ blog: string }> }) {
  const postSlug = (await params).blog

  const posts = [
    {
      date: 'December 4, 2024',
      title: 'How to use Laravel Pint in VSCode?',
      slug: 'how-to-use-laravel-pint-in-vscode',
      description: 'Laravel Pint is an opinionated PHP code style fixer based on PHP-CS-Fixer. It helps maintain consistent code style and...',
      thumbnail: '/placeholder.svg?height=200&width=300',
      category:
      {
        name: 'Tech',
        slug: 'tech',
      },
    },
    {
      date: 'November 18, 2024',
      title: 'How to Extract Audio from MKV Files Using FFmpeg',
      slug: "how-to-extract-audio-from-mkv-files-using-ffmpeg",
      description: 'Laravel Pint is an opinionated PHP code style fixer based on PHP-CS-Fixer. It helps maintain consistent code style and...',
      thumbnail: '/placeholder.svg?height=200&width=300',
      category:
      {
        name: 'Tech',
        slug: 'tech',
      },
    },
    {
      date: 'November 9, 2024',
      title: "AI Won't Replace Developers - Here's Why We'll Thrive Instead",
      slug: "ai-Won't-replace-developers---here's-why-we'll-thrive-instead",
      description: 'First time I saw AI generating code, I panicked. Not gonna lie, felt like those rights in 2014 when I was struggling to...',
      thumbnail: '/placeholder.svg?height=200&width=300',
      category: {
        name: 'Lifestyle',
        slug: 'lifestyle',
      },
    },
  ]

  const getPost = posts.find(post => post.slug === postSlug)

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex-col'>
        <Link href="/blog" className='underline'>← back to blog</Link>
        <div className='flex flex-col mt-12 space-y-3 md:space-y-2'>
          <span className='text-sm text-zinc-500'>{getPost?.date}</span>
          <h1 className='text-xl font-bold'>{getPost?.title}</h1>
          {getPost?.thumbnail && (
            <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden mb-2'>
              <Image
                src={getPost?.thumbnail ?? "/placeholder.svg"}
                alt={getPost?.title ?? "undefined image"}
                width={300}
                height={200}
                className='object-cover w-full h-full relative'
              />
            </div>
          )}
          <p>{getPost?.description}</p>
        </div>
      </div>
    </section>
  )
}