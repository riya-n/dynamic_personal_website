import React, { useState } from 'react'
import { connect } from 'react-redux'

import EditHeader from './EditHeader'
import { EditButton, HeaderTitle, HeaderDescription } from '../styles'

const Header = ({ header }) => {
  const { image, description } = header
  const [editing, setEditing] = useState(false)

  return (
    <div style={{ padding: '3rem 10rem', background: 'rgb(246, 247, 247)' }}>
      <HeaderTitle>Hey this is me!</HeaderTitle>
      {
        editing ? <EditHeader header={{ image, description }} setEditing={setEditing} /> :
        <div>
          <div style={{ display: 'inline-flex' }}>
            <img style={{ maxHeight: '400px' }} src={image} alt="" />
            <HeaderDescription>{description}</HeaderDescription>
          </div>
          <EditButton onClick={() => setEditing(true)}>Edit</EditButton>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  header: state.header
})

export default connect(mapStateToProps)(Header)
