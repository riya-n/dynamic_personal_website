const blogposts = (state = [], action) => {
  const { type, id, post } = action

  switch (type) {
    case 'ADD_POST':
      console.log('reducer', id, post)
      return [
        ...state,
        { id, post }
      ]
    case 'EDIT_POST':
      return state.map(blogpost =>
        (blogpost.id === id)
          ? { id, post }
          : blogpost
      )
    case 'DELETE_POST':
      return state.filter(blogpost => blogpost.id !== id)
    default:
      return state
  }
}

export default blogposts
