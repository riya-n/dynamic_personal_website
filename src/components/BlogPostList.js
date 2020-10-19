import React from 'react'
import AddBlogPost from './AddBlogPost'
import BlogPost from './BlogPost'
import { connect } from 'react-redux'
import { addBlogPost } from '../actions'
import blogposts from '../reducers/blogposts'

const BlogPostList = ({ blogposts }) => {
  let posts = []
  blogposts.map(blogpost => {
    posts.push(<BlogPost key={blogpost.id} {...blogpost} />)
  })


  return (
    <div>
      <div>Blog Posts</div>
      <AddBlogPost />
      
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

// const mapDispatchToProps = dispatch => ({
//   addBlogPost: blogpost => dispatch(addBlogPost(blogpost))
// })

export default connect(mapStateToProps)(BlogPostList)
