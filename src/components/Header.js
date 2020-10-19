import React, { useState } from 'react'
import { connect } from 'react-redux'

import EditHeader from './EditHeader'

const Header = ({ header }) => {
  const { image, description } = header
  const [editing, setEditing] = useState(false)

  return (
    <div>
      <div>Hey this is me!</div>
      {
        editing ? <EditHeader header={{ image, description }} setEditing={setEditing} /> :
        <div>
          <img src={image} alt="" />
          <div>{description}</div>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  header: state.header
})

export default connect(mapStateToProps)(Header)
