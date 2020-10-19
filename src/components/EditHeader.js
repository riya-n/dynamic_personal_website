/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editHeader } from '../actions'
import {
  CancelButton, SaveButton, InputTitle, InputBox,
} from '../styles'

const EditHeader = ({ header, setEditing, editHeader }) => {
  const [image, setImage] = useState(header.image ? header.image : '')
  const [description, setDescription] = useState(header.description ? header.description : '')

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        editHeader({ image, description })
        setEditing(false)
      }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <InputTitle>Image</InputTitle>
          <InputBox placeholder="Enter image url" value={image} onChange={e => setImage(e.target.value)} />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <InputTitle>Description</InputTitle>
          <InputBox placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} />
        </div>

        <SaveButton type="submit">Save</SaveButton>
        <CancelButton style={{ marginLeft: '1rem' }} onClick={() => setEditing(false)}>Cancel</CancelButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  editHeader: header => dispatch(editHeader(header)),
})

export default connect(null, mapDispatchToProps)(EditHeader)
