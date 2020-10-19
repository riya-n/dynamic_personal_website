import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editHeader } from '../actions'

const EditHeader = ({ header, setEditing, editHeader }) => {
  const [image, setImage] = useState(header.image ?? '')
  const [description, setDescription] = useState(header.description ?? '')

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        editHeader({image, description})
        setEditing(false)
      }}>
        <div>Image</div>
        <input placeholder="Enter image url" value={image} onChange={e => setImage(e.target.value)} />

        <div>Description</div>
        <input placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} />
        
        <button type="submit">Save</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  editHeader: header => dispatch(editHeader(header))
})

export default connect(null, mapDispatchToProps)(EditHeader)
