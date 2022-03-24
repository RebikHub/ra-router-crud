import React from 'react'
import { Link } from 'react-router-dom'

export default function CreatePost({handlePost, create, handleInputCreate}) {
  return (
    <div className="create-post">
      <div className="create-head">
        <div className="head-publish">
          <span></span>
          <p>Публикация</p>
        </div>
        <div className="head-photo">
          <span></span>
          <p>Фото/Видео</p>
        </div>
        <div className="head-live">
          <span></span>
          <p>Прямой эфир</p>
        </div>
        <div className="head-more">
          <span></span>
          <p>Еще</p>
        </div>
        <span className="create-close"/>
      </div>
      <div className="create-body">
        <img src="" alt="" />
        <input className="create-text" value={create} onChange={handleInputCreate}/>
      </div>
      <div className="create-footer">
        <Link to={'/'} onClick={handlePost} className="create-publish">Опубликовать</Link>
      </div>
    </div>
  )
}
