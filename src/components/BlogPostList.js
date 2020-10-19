import React, { useState } from 'react'
import { connect } from 'react-redux'

import AddBlogPost from './AddBlogPost'
import BlogPost from './BlogPost'

const BlogPostList = ({ blogposts }) => {
  const [adding, setAdding] = useState(false)
  let posts = []
  blogposts.map(blogpost => {
    posts.push(<BlogPost key={blogpost.id} {...blogpost} />)
  })

  return (
    <div>
      <div>Blog Posts</div>

      <button onClick={() => setAdding(true)}>Add Post</button>
      {
        adding? <AddBlogPost setAdding={setAdding} /> : ''
      }
      
      <ul>
        {
          posts.map(post => post)
          // blogposts.map(blogpost => {
          //   <BlogPost 
          //     key={blogpost.id}
          //     {...blogpost.post}
          //   />
          // })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  blogposts: state.blogposts
})

export default connect(mapStateToProps)(BlogPostList)
