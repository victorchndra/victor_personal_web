import React from 'react'
import { getAllProjectPosts } from '../project/actions'
import ProjectsHydrationWrapper from './projects-hydration-wrapper'

export const RecentProjects = async () => {
  const { data } = await getAllProjectPosts()
  const ssrProjects = data.slice(0, 2)

  return <ProjectsHydrationWrapper ssrProjects={ssrProjects} />
}
