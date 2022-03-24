import React, { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import ListPosts from "./components/ListPosts";
import EditPost from "./components/EditPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonCreate from "./components/ButtonCreate";

export default function App() {
  const [posts, setPosts] = useState([])
  const [createPost, setCreatePost] = useState('')
  const [sendPost, setSendPost] = useState(null)

  useEffect(() => {
    fetch('http://localhost:7777/posts')
      .then(resp => resp.json())
      .then(json => setPosts(json))
  }, [])

  useEffect(() => {
    if (sendPost !== null) {
      fetch('http://localhost:7777/posts', {
        method: 'POST',
        body: sendPost
      })
      .then(resp => resp.json())
      .then(json => console.log(json))
    }
  }, [sendPost])

  function fetchPost() {
    setSendPost(createPost)
    setCreatePost('')
  }
  function inputCreate(ev) {
    setCreatePost(ev.target.value)
  }
  return (
    <BrowserRouter>
      <div className="main-page">
        <ButtonCreate/>
        <Routes>
          <Route path={'/'} element={<ListPosts posts={posts}/>}/>
          <Route path={'/posts/new'} element={<CreatePost
              handlePost={fetchPost}
              create={createPost}
              handleInputCreate={inputCreate}/>}/>
          {/* <Route path={'/posts/new'} element={<EditPost/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
