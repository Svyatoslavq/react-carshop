import React from 'react';
import logo from '../img/react-cars-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CustomContext } from '../Context/Context';

function Header() {
  const { user, logOutUser } = useContext(CustomContext);
  console.log(user);

  return (
    <div className="background__header">
      <div className="header">
        <NavLink to="/">
          <img className="header__logo" width={140} src={logo} alt="Cars logo" />
        </NavLink>
        <ul>
          <li className="header__link">
            <NavLink to="/sell" className="header__link">
              Продать авто
            </NavLink>
          </li>
          <li className="header__link">
            <NavLink to="/catalog" className="header__link">
              {' '}
              Каталог
            </NavLink>
          </li>
          {user.login.length ? (
            <li className="header__link">
              <NavLink
                to="/account/post"
                className="header__link"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                {user.avatar ? (
                  <div
                    className="header__avatar"
                    style={{ backgroundImage: 'url(' + user.avatar + ')', width: 40, height: 40 }}
                  />
                ) : (
                  <FontAwesomeIcon className="header__icon" icon={faUser} />
                )}
                {user.login}
              </NavLink>
            </li>
          ) : (
            ''
          )}

          {user.login.length ? (
            <NavLink to={'/'} onClick={() => logOutUser()} style={{ marginLeft: '25px' }}>
              Выйти
            </NavLink>
          ) : (
            <NavLink to={'/login'} style={{ marginLeft: '25px' }}>
              Войти
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
