import React from 'react'
import BlogLayout from '../components/blog/blog-layout'
import Posts from '../components/blog/posts'

export default function BlogCategory() {

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
    <BlogLayout>
      <Posts posts={posts} />
    </BlogLayout>
  )
}
