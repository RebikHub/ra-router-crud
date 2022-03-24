import React from 'react'

export default function EditPost() {
  return (
    <div className="edit-publish">

      <div className="edit-head">
        <h3>Редактировать публикацию</h3>
        <span className="edit-close"/>
      </div>

      <div className="edit-body">
        <img src="" alt="" />
        <input className="edit-text"/>
      </div>

      <div className="edit-tags">
        <div className="edit-photo">
          <span className="edit-photo-png"/>
          <p>Фото/Видео</p>
        </div>
        <div className="edit-friends">
          <span className="edit-friends-png"/>
          <p>Отметить друзей</p>
        </div>
        <div className="edit-emoji">
          <span className="edit-emoji-png"/>
          <p>Чувства/Действия</p>
        </div>
        <div className="edit-point">
          <span className="edit-point-png"/>
          <p>Отметить посещение</p>
        </div>
        <div className="edit-gif">
          <span className="edit-gif-png"/>
          <p>GIF</p>
        </div>
      </div>
      <div className="edit-save">
        <button type="button" className="edit-btn">Сохранить</button>
      </div>
    </div>
  )
}
