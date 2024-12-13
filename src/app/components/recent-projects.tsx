import React from 'react'
import { getAllProjectPosts } from '../project/actions'
import ProjectsHydrationWrapper from './projects-hydration-wrapper'

export const dynamic = 'force-dynamic';

export const RecentProjects = async () => {
  const { data } = await getAllProjectPosts()

  if (!data || !Array.isArray(data)) return []

  const ssrProjects = (data || []).slice(0, 2)

  return <ProjectsHydrationWrapper ssrProjects={ssrProjects} />
}
