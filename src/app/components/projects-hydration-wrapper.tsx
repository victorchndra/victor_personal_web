'use client'
import { useEffect, useState } from "react"
import { TContent } from "../blog/types"
import Link from "next/link"

export default function ProjectsHydrationWrapper({ ssrProjects }: { ssrProjects: TContent[] }) {
  const [hydratedProjects, setHydratedProjects] = useState<TContent[] | null>()

  useEffect(() => {
    const timer = setTimeout(() => {
      setHydratedProjects(ssrProjects)
    }, 700)

    return () => clearTimeout(timer)
  }, [ssrProjects])

  return (
    <section className='flex justify-center'>
      <div className='w-full max-w-[570px]'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-lg font-medium'>Recent Projects</h2>
          <Link href="/project" className='underline decoration-wavy'>See all projects</Link>
        </div>
        <div className="flex flex-wrap gap-4">
          {hydratedProjects ? hydratedProjects.map((project, index) => (
            <Link key={index} href={`/project/${project.category.slug}/${project.slug}`} className='group w-[calc(50%-8px)] elementToFadeInAndOut'>
              <div className='space-y-2'>
                <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden'>
                  {/* <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt={project.title}
                      width={300}
                      height={200}
                      className='object-cover w-full h-full'
                    /> */}
                </div>
                <h3 className='font-medium group-hover:underline'>{project.name}</h3>
                <p className='text-sm text-zinc-500'>{project.description}</p>
              </div>
            </Link>
          )) : (
            Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className='group w-[calc(50%-8px)]'>
                <div className='space-y-2 animate-pulse'>
                  <div className='aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden'></div>
                  <div className='bg-gray-200 h-6 w-2/3 rounded-md'></div>
                  <div className='bg-gray-200 h-6 w-full rounded-md'></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}