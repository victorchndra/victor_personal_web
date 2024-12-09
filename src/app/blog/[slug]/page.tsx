import React from 'react'

const Blogs = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>Project: {params.slug}</h1>
    </div>
  )
}

export default Blogs