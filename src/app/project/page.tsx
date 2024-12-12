import React from 'react'
import ProjectLayout from '../components/project/project-layout'
// import ProjectPosts from '../components/project/project-posts'
import HydrationWrapper from '../components/project/hydration-wrapper'
import { getAllProjectPosts } from './actions'

const ProjectCategory = async () => {
  const { data: recentProjects } = await getAllProjectPosts()

  const projects = recentProjects || []

  return (
    <ProjectLayout>
      {/* <ProjectPosts projects={projects} /> */}
      <HydrationWrapper ssrData={projects} />
    </ProjectLayout>
  )
}

export default ProjectCategory