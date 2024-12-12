import React from 'react'
import ProjectLayout from '../components/project/project-layout'
// import ProjectPosts from '../components/project/project-posts'
import HydrationWrapper from '../components/project/hydration-wrapper'
import { getAllProjectPosts } from './actions'

const ProjectCategory = async () => {
  const { data: recentProjects } = await getAllProjectPosts();

  // let recentProjects = []
  // try {
  //   const { data } = await getAllProjectPosts()
  //   recentProjects = data || []
  // } catch (error) {
  //   console.error("Failed to fetch projects:", error)
  //   recentProjects = []
  // }

  return (
    <ProjectLayout>
      {/* <ProjectPosts projects={projects} /> */}
      <HydrationWrapper ssrData={recentProjects || []} />
    </ProjectLayout>
  )
}

export default ProjectCategory