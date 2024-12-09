import ProjectLayout from '@/app/components/project/project-layout'
import ProjectPosts from '@/app/components/project/project-posts'
import React from 'react'

export default async function ProjectList({ params }: { params: Promise<{ category: string }> }) {
  const projectSlug = (await params).category

  const projects = [
    {
      title: "Indie Action Club",
      slug: 'indie-action-club',
      description: "A community for builders that get things done.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category:
      {
        name: 'Personal',
        slug: 'personal',
      },
    },
    {
      title: "iCodeThis",
      slug: 'icodethis',
      description: "Improve your coding skills by building projects",
      thumbnail: "/placeholder.svg?height=200&width=300",
      category:
      {
        name: 'Personal',
        slug: 'personal',
      },
    },
  ]

  const filteredProject = projects.filter(project => project.category.slug === projectSlug)

  return (
    <ProjectLayout>
      <ProjectPosts projects={filteredProject} />
    </ProjectLayout>
  )
}
