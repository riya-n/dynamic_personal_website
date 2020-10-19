import React, { useState } from 'react'
import { connect } from 'react-redux'

import { deleteBlogPost, editBlogPost } from '../actions'

const EditBlogPost = ({ id, post, setEditing, editBlogPost, deleteBlogPost }) => {
  console.log('id', id, post, setEditing)
  const [title, setTitle] = useState(post.title ?? '')
  const [image, setImage] = useState(post.image ?? '')
  const [description, setDescription] = useState(post.description ?? '')

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        editBlogPost(id, {title, image, description})
        setEditing(false)
      }}>

        <div>Title</div>
        <input placeholder="Enter the title of the post" value={title} onChange={e => setTitle(e.target.value)} />

        <div>Image</div>
        <input placeholder="Enter image url" value={image} onChange={e => setImage(e.target.value)} />

        <div>Description</div>
        <input placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} />
        
        <button type="submit">Save</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </form>

      <form onSubmit={e => {
        e.preventDefault()
        console.log('trying to delete', id)
        deleteBlogPost(id)
      }}>
        <button type="submit">Delete Post</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  editBlogPost: (id, post) => dispatch(editBlogPost(id, post)),
  deleteBlogPost: id => dispatch(deleteBlogPost(id))
})

export default connect(null, mapDispatchToProps)(EditBlogPost)
