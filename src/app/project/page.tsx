import React from 'react'
import ProjectLayout from '../components/project/project-layout'
// import ProjectPosts from '../components/project/project-posts'
import HydrationWrapper from '../components/project/hydration-wrapper'
import { getAllProjectPosts } from './actions'
import { TContent } from './types';

export async function getStaticProps() {
  try {
    const { data: recentProjects } = await getAllProjectPosts();

    return {
      props: {
        recentProjects: recentProjects || [], // Fallback to an empty array if undefined
      },
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      props: {
        recentProjects: [],
      },
    };
  }
}

const ProjectCategory = async ({ recentProjects }: { recentProjects: TContent[] }) => {

  return (
    <ProjectLayout>
      {/* <ProjectPosts projects={projects} /> */}
      <HydrationWrapper ssrData={recentProjects} />
    </ProjectLayout>
  )
}

export default ProjectCategory