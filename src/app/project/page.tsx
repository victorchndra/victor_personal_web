import React from 'react'
import ProjectLayout from '../components/project/project-layout'
// import ProjectPosts from '../components/project/project-posts'
import HydrationWrapper from '../components/project/hydration-wrapper'
import { getAllProjectPosts } from './actions'

export const dynamic = 'force-dynamic';

const ProjectCategory = async () => {
  const { data: recentProjects } = await getAllProjectPosts();

  if (!Array.isArray(recentProjects) || recentProjects.length === 0) return [];

  return (
    <ProjectLayout>
      {/* <ProjectPosts projects={projects} /> */}
      <HydrationWrapper ssrData={recentProjects || []} />
    </ProjectLayout>
  )
}

export default ProjectCategory