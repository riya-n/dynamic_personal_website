// import React from 'react'
// import { connect } from 'react-redux'

// import { editHeader } from '../actions'

// const EditHeader = ({ editHeader }) => {
//   let input

//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         editHeader(input.value)
//         input.value = ''
//       }}>
//         <input ref={node => input = node} />
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// }

// const mapDispatchToProps = dispatch => ({
//   editHeader: header => dispatch(editHeader(header))
// })

// export default connect(null, mapDispatchToProps)(EditHeader)