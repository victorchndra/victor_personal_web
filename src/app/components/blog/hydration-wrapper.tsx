'use client'

import { TContent } from "@/app/blog/types"
import { useEffect, useState } from "react"
import BlogPosts from "./blog-posts"

// HydrationWrapper for Loading Effect
export default function HydrationWrapper({ ssrData }: { ssrData: TContent[] }) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated ? <BlogPosts posts={ssrData} /> : <LoadingPlaceholder />
}

function LoadingPlaceholder() {
  return (
    Array.from({ length: 5 }).map((_, index) => (
      <div className='flex' key={index}>
        <div className="rounded-md py-4 w-full mx-auto ">
          <div className="animate-pulse flex flex-col space-y-2">
            <div className='bg-gray-200 h-4 w-1/4 rounded-md'></div>
            <div className='bg-gray-200 h-6 w-2/3 rounded-md'></div>
            <div className='bg-gray-200 h-6 w-full rounded-md'></div>
          </div>
        </div>
      </div>
    ))
  )
}
