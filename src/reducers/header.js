/* eslint-disable no-shadow */
const header = (state = {}, action) => {
  const { type, header } = action

  switch (type) {
    case 'EDIT_HEADER':
      return header
    default:
      return state
  }
}

export default header
