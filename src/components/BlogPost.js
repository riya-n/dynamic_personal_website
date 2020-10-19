/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import EditBlogPost from './EditBlogPost'

import {
  ListElement, PostDescription, PostImage, PostTitle, EditButton,
} from '../styles'

const BlogPost = ({ id, post }) => {
  const { title, image, description } = post
  const [editing, setEditing] = useState(false)

  return (
    editing ? <EditBlogPost id={id} post={post} setEditing={setEditing} />
      : (
        <ListElement>
          <PostImage src={image} alt="Card image cap" />
          <PostTitle>{`Post #${id + 1}: ${title}`}</PostTitle>
          <PostDescription>{description}</PostDescription>
          <EditButton style={{ margin: '1.25rem' }} onClick={() => setEditing(true)}>Edit Post</EditButton>
        </ListElement>
      )
  )
}

export default BlogPost
