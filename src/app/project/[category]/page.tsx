import ProjectLayout from '@/app/components/project/project-layout'
import ProjectPosts from '@/app/components/project/project-posts'
import React from 'react'
import { getFilteredProjectPosts } from '../actions'

export default async function ProjectList({ params: asyncParams }: { params: { category: string } }) {
  const resolvedParams = await asyncParams
  const { data: filteredProjects } = await getFilteredProjectPosts(resolvedParams.category)

  const currentPath = `/project/${resolvedParams.category}`

  return (
    <ProjectLayout currentPath={currentPath}>
      <ProjectPosts projects={filteredProjects} />
    </ProjectLayout>
  )
}
