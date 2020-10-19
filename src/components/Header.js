import React from 'react'

import { editHeader } from '../actions'

const Header = ({ image, description }) => (
  <div>
    <div>Hey this is me!</div>
    <img src={image} alt="" />
    <div>{description}</div>
  </div>
)

export default Header