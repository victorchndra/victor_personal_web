import ProjectLayout from '@/app/components/project/project-layout'
import ProjectPosts from '@/app/components/project/project-posts'
import React from 'react'
import { getAllProjectPosts, getFilteredProjectPosts } from '../actions'

export async function generateStaticParams() {
  const { data: projects } = await getAllProjectPosts();

  return projects.map((category: { slug: string }) => ({ category: category.slug }))
}

export default async function ProjectList({ params: asyncParams }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await asyncParams
  const { data: filteredProjects } = await getFilteredProjectPosts(resolvedParams.category)

  const currentPath = `/project/${resolvedParams.category}`

  return (
    <ProjectLayout currentPath={currentPath}>
      <ProjectPosts projects={filteredProjects} />
    </ProjectLayout>
  )
}
