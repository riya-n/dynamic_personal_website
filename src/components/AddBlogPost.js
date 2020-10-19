import React from 'react'
import { connect } from 'react-redux'

import { addBlogPost } from '../actions'

const AddBlogPost = ({ addBlogPost }) => {
  let title, image, description

  return (
    <div>
      <div>New Post</div>
      <button>x</button>

      <form onSubmit={e => {
        e.preventDefault()
        console.log('onubmit', title.value, image.value, description.value)
        addBlogPost({title: title.value, image: image.value, description: description.value})
        title.value = ''
        image.value = ''
        description.value = ''
      }}>

        <div>Title</div>
        <input placeholder="Enter the title of the post" ref={node => title = node} />

        <div>Image</div>
        <input placeholder="Enter image url" ref={node => image = node} />

        <div>Description</div>
        <input placeholder="Enter description" ref={node => description = node} />
        
        <button type="submit">Save</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addBlogPost: post => dispatch(addBlogPost(post))
})

export default connect(null, mapDispatchToProps)(AddBlogPost)