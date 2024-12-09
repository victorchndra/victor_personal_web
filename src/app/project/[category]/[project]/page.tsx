import React from 'react'

export default async function ProjectDetail({ params }: { params: Promise<{ project: string }> }) {
  const projectSlug = (await params).project

  return (
    <div>{projectSlug}</div>
  )
}