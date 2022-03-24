import React from 'react'
import Post from './Post'

export default function ListPosts({posts}) {
  return (
      <div className="list-posts">
        {posts.map((el) => <Post content={el.content} created={el.created} key={el.id}/>)}
      </div> 
  )
}
