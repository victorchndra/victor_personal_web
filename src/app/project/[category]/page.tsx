import ProjectLayout from '@/app/components/project/project-layout'
import ProjectPosts from '@/app/components/project/project-posts'
import React from 'react'
import { getAllProjectPosts, getFilteredProjectPosts } from '../actions'

export const revalidate = 60;
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const { data: projects } = await getAllProjectPosts();

  if (!Array.isArray(projects) || projects.length === 0) return [];

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
