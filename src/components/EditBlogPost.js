import React, { useState } from 'react'
import { connect } from 'react-redux'

import { deleteBlogPost, editBlogPost } from '../actions'
import { DeleteButton, SaveButton, CancelButton, InputBox, InputTitle, ListElement } from '../styles'

const EditBlogPost = ({ id, post, setEditing, editBlogPost, deleteBlogPost }) => {
  const [title, setTitle] = useState(post.title ?? '')
  const [image, setImage] = useState(post.image ?? '')
  const [description, setDescription] = useState(post.description ?? '')

  return (
    <ListElement style={{ padding: '1.25rem' }}>
      <form onSubmit={e => {
        e.preventDefault()
        editBlogPost(id, {title, image, description})
        setEditing(false)
      }}>
        <InputTitle>Title</InputTitle>
        <InputBox style={{ marginBottom: '2rem' }} placeholder="Enter the title of the post" value={title} onChange={e => setTitle(e.target.value)} />

        <InputTitle>Image</InputTitle>
        <InputBox style={{ marginBottom: '2rem' }} placeholder="Enter image url" value={image} onChange={e => setImage(e.target.value)} />

        <InputTitle>Description</InputTitle>
        <InputBox style={{ marginBottom: '2rem' }} placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} />
        
        <SaveButton type="submit">Save</SaveButton>
        <CancelButton style={{ marginLeft: '1rem' }} onClick={() => setEditing(false)}>Cancel</CancelButton>
      </form>

      <form onSubmit={e => {
        e.preventDefault()
        deleteBlogPost(id)
      }}>
        <DeleteButton style={{ marginTop: '2rem' }} type="submit">Delete Post</DeleteButton>
      </form>
    </ListElement>
  )
}

const mapDispatchToProps = dispatch => ({
  editBlogPost: (id, post) => dispatch(editBlogPost(id, post)),
  deleteBlogPost: id => dispatch(deleteBlogPost(id))
})

export default connect(null, mapDispatchToProps)(EditBlogPost)
