'use client'

import { TContent } from "@/app/project/types"
import { useEffect, useState } from "react"
import ProjectPosts from "./project-posts"

// HydrationWrapper for Loading Effect
export default function HydrationWrapper({ ssrData }: { ssrData: TContent[] }) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHydrated(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return hydrated ? <ProjectPosts projects={ssrData} /> : <LoadingPlaceholder />
}

function LoadingPlaceholder() {
  return (
    Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className='group w-[calc(50%-8px)] mb-4'>
        <div className='space-y-2 animate-pulse'>
          <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden'></div>
          <div className='bg-gray-200 h-4 w-2/3 rounded-md'></div>
          <div className='bg-gray-200 h-4 w-full rounded-md'></div>
        </div>
      </div>
    ))
  )
}
