const header = (state = false, action) => {
  const { type, header } = action
  const { image, description } = header

  switch (type) {
    case 'EDIT_HEADER':
      print('add post in blogposts reducer')
      // return [
      //   ...state,
      //   { id, text, completed: false }
      // ]
    case 'EDIT_POST':
      print('edit post in blogposts reducer')
      // return state.map(todo =>
      //   (todo.id === id)
      //     ? {...todo, completed: !todo.completed}
      //     : todo
      // )
    default:
      print('default case in blogposts reducer')
      // return state
  }
}

export default header
