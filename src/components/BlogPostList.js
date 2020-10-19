import React, { useState } from 'react'
import { connect } from 'react-redux'

import AddBlogPost from './AddBlogPost'
import BlogPost from './BlogPost'
import { List, ListTitle, AddButton } from '../styles'

const BlogPostList = ({ blogposts }) => {
  const [adding, setAdding] = useState(false)

  let posts = []
  blogposts.map(blogpost => {
    posts.push(<BlogPost key={blogpost.id} {...blogpost} />)
  })

  return (
    <div style={{ padding: '3rem 10rem' }}>
      <ListTitle>Blog Posts</ListTitle>

      <AddButton onClick={() => setAdding(true)}>Add Post</AddButton>
      {
        adding ? <AddBlogPost setAdding={setAdding} /> : ''
      }
      
      <List>
        {
          posts.map(post => post)
          // blogposts.map(blogpost => {
          //   <BlogPost 
          //     key={blogpost.id}
          //     {...blogpost.post}
          //   />
          // })
        }
      </List>
    </div>
  )
}

const mapStateToProps = state => ({
  blogposts: state.blogposts
})

export default connect(mapStateToProps)(BlogPostList)
