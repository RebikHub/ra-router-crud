import React from 'react'
import FooterPostButtons from './FooterPostButtons'
import FooterPostComment from './FooterPostComment'

export default function Post({content, created}) {
  return (
    <div className="post">

    <header className="post-head">
      <img src="#" alt="#" />
      <div className="post-head-title">
        <h4 className="name-creator">UserName</h4>
        <p className="description-creator">
          Post creator
          <span className="create-time"> - {created}</span>
          </p>
      </div>
    </header>

    <p className="post-body">{content}</p>

    <div className="post-likes">
      <div className="likes">
        <span/>
        <p>Нравиться</p>
      </div>
      <div className="comment-on">
        <span/>
        <p>Комментировать</p>
      </div>
    </div>

    <FooterPostComment/>
    <FooterPostButtons/>
    
  </div>
  )
}
