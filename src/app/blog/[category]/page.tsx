import React from 'react'

const Blogs = ({ params }: { params: { category: string } }) => {
  return (
    <div>
      <h1>Project: {params.category}</h1>
    </div>
  )
}

export default Blogs