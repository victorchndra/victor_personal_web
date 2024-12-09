import Link from 'next/link'
import React from 'react'

export default function BlogCategory() {
  const categories = [
    {
      name: 'Tech',
      slug: 'tech',
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

  const posts = [
    {
      date: 'December 4, 2024',
      title: 'How to use Laravel Pint in VSCode?',
      slug: 'how-to-use-laravel-pint-in-vscode?',
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

  return (
    <section className='flex justify-center'>
      <div className='max-w-[570px] w-full flex flex-col'>
        <div className='flex space-x-4 my-6'>
          {categories.map((category, index) => (
            <Link key={index} href={`/blog/${category.slug}`} className='px-3 py-1 border border-black'>{category.name}</Link>
          ))}
        </div>
        <div className="flex flex-col">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.category.slug}/${post.slug}`} className='group w-full'>
              <div className='hover:bg-slate-50'>
                <time className='text-xs text-zinc-500'>{post.date}</time>
                <h3 className='font-medium group-hover:underline mb-2'>{post.title}</h3>
                <p className='text-sm text-zinc-500'>{post.description}</p>
              </div>
              {index !== (posts.length - 1) && (
                <hr className='my-4' />
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
