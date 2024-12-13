import React from 'react'
import { getAllProjectPosts } from '../project/actions'
import ProjectsHydrationWrapper from './projects-hydration-wrapper'

export const dynamic = 'force-dynamic';

export async function RecentProjects() {
  const { data } = await getAllProjectPosts()
  console.log('Fetched data for RecentProjects:', data);

  if (!data || !Array.isArray(data)) return []

  const ssrProjects = (data || []).slice(0, 2)

  return <ProjectsHydrationWrapper ssrProjects={ssrProjects} />
}
