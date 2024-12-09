import React from 'react'
import ProjectLayout from '../components/project/project-layout'
import ProjectPosts from '../components/project/project-posts'

const ProjectCategory = () => {

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

  return (
    <ProjectLayout>
      <ProjectPosts projects={projects} />
    </ProjectLayout>
  )
}

export default ProjectCategory