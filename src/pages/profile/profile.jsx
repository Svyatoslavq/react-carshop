import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Settings from './settings/settings';
import Messages from './Messages/Messages';
import Post from './Post/post';

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <ul className="profile__tabs">
          <li className="profile__link">
            <NavLink className="profile__link" to="/account/post">
              Мои объявление
            </NavLink>
          </li>
          <li className="profile__link">
            <NavLink className="profile__link" to="/account/messages">
              Cообщения
            </NavLink>
          </li>
          <li className="profile__link">
            <NavLink className="profile__link" to="/account/settings">
              Настройки профиля
            </NavLink>
          </li>
        </ul>

        <>
          <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </>
      </div>
    </div>
  );
};

export default Profile;
