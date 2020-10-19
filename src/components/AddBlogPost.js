/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { connect } from 'react-redux'

import { addBlogPost } from '../actions'
import {
  CancelButton, SaveButton, InputTitle, InputBox, NewPostTitle, XButton, AddPostPopUp,
} from '../styles'

const AddBlogPost = ({ setAdding, addBlogPost }) => {
  let title; let image; let
    description

  return (
    <AddPostPopUp>
      <div style={{
        borderBottom: '1px solid #dee2e6', padding: '20px', display: 'flex', placeContent: 'space-between',
      }}
      >
        <NewPostTitle>New Post</NewPostTitle>
        <XButton onClick={() => setAdding(false)}>x</XButton>
      </div>

      <form
        style={{ padding: '20px' }}
        onSubmit={e => {
          e.preventDefault()
          addBlogPost({ title: title.value, image: image.value, description: description.value })
          setAdding(false)
          title.value = ''
          image.value = ''
          description.value = ''
        }}
      >
        <InputTitle>Title</InputTitle>
        <InputBox style={{ marginBottom: '2rem' }} placeholder="Enter the title of the post" ref={node => title = node} />

        <InputTitle>Image</InputTitle>
        <InputBox style={{ marginBottom: '2rem' }} placeholder="Enter image url" ref={node => image = node} />

        <InputTitle>Description</InputTitle>
        <InputBox style={{ marginBottom: '2rem' }} placeholder="Enter description" ref={node => description = node} />

        <SaveButton type="submit">Save</SaveButton>
        <CancelButton style={{ marginLeft: '1rem' }} onClick={() => setAdding(false)}>Cancel</CancelButton>
      </form>
    </AddPostPopUp>
  )
}

const mapDispatchToProps = dispatch => ({
  addBlogPost: post => dispatch(addBlogPost(post)),
})

export default connect(null, mapDispatchToProps)(AddBlogPost)
