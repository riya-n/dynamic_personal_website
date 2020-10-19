import React, { useState } from 'react'

import EditBlogPost from './EditBlogPost'

const BlogPost = ({ id, post }) => {
  const { title, image, description } = post
  const [editing, setEditing] = useState(false)

  return (
    editing ? <EditBlogPost id={id} post={post} setEditing={setEditing} /> :
    <li>
      <img src={image} alt="Card image cap" />
      <div>{title}</div>
      <div>{description}</div>
      <button onClick={() => setEditing(true)}>Edit Post</button>
    </li>
  )
}

export default BlogPost
