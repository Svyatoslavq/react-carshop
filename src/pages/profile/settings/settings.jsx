import React, { useContext, useState } from 'react';
import { CustomContext } from '../../../components/Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Settings = () => {
  const [userChange, setUserChange] = useState(false);
  const [imgChange, setImgChange] = useState(false);
  const [passChange, setPassChange] = useState(false);

  const { user, setUser } = useContext(CustomContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const changeAvatar = (data) => {
    axios.patch(`http://localhost:8080/users/${user.id}`, data).then(({ data }) => {
      setImgChange(false);
      axios(`http://localhost:8080/items?creator.id=${data.id}`).then((json) =>
        json.data.forEach((item) => {
          axios
            .patch(`http://localhost:8080/items/${item.id}`, {
              creator: data,
            })
            .then(() => {
              setUser(data);
              localStorage.setItem('user', JSON.stringify(data));
            });
        }),
      );
    });
  };

  const changeUser = (data) => {
    axios.patch(`http://localhost:8080/users/${user.id}`, data).then(({ data }) => {
      setUserChange(false);
      axios(`http://localhost:8080/items?creator.id=${data.id}`).then((json) =>
        json.data.forEach((item) => {
          axios
            .patch(`http://localhost:8080/items/${item.id}`, {
              creator: data,
            })
            .then(() => {
              setUser(data);
              localStorage.setItem('user', JSON.stringify(data));
            });
        }),
      );
    });
  };

  const changePassword = (data) => {
    data.password.length > 4 ? console.log('пароль изменен') : delete data.password;
    axios
      .patch(`http://localhost:8080/users/${user.id}`, { password: data.password })
      .then(() => setPassChange(false));
  };

  return (
    <div>
      <div className="profile__header">
        <h2 className="profile__title">Мой аккаунт</h2>
      </div>
      <div className="profile__container">
        <form onSubmit={handleSubmit(changeAvatar)} className="profile__image">
          <p
            style={{ padding: '0', margin: '0', display: 'flex', justifyContent: 'right' }}
            className="profile-content__title2"
          >
            <FontAwesomeIcon
              icon={faPen}
              style={{
                marginRight: '3px 0',
                color: '#15141b',
                cursor: 'pointer',
                height: '13px',
              }}
            />
            <span
              style={{ fontSize: '14px', color: '#15141b' }}
              onClick={() => setImgChange(!imgChange)}
            >
              {imgChange ? 'Отменить' : 'Изменить'}
            </span>
          </p>
          <div
            className="avatar"
            style={
              user.avatar
                ? { backgroundImage: 'url(' + user.avatar + ')', width: 200, height: 200 }
                : {
                    backgroundImage:
                      'url(' +
                      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' +
                      ')',
                    width: 200,
                    height: 200,
                  }
            }
          />
          <p>{user.login}</p>

          {imgChange ? (
            <input
              {...register('avatar')}
              defaultValue={user.avatar}
              type="avatar"
              style={{ display: 'block', marginBottom: '20px' }}
            />
          ) : (
            ''
          )}
          {imgChange ? (
            <button className="change__btn" type="submit">
              Сохранить изменения
            </button>
          ) : (
            ''
          )}
        </form>
        <div>
          <form className="profile__content" onSubmit={handleSubmit(changeUser)}>
            <div className="profile__change">
              <h3 className="profile-content__title">Личные данные</h3>
              <span className="profile-content__title2">
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ marginRight: '10px', color: '#15141b', cursor: 'pointer' }}
                />
                <span style={{ color: '#15141b' }} onClick={() => setUserChange(!userChange)}>
                  {userChange ? 'Отменить' : 'Изменить'}
                </span>
              </span>
            </div>
            <div className="profile__info">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '5vw' }}>
                <p className="profile__info-about">
                  <span className="profile__info-upper">Имя</span>
                  {userChange ? (
                    <input {...register('login')} defaultValue={user.login} type="text" />
                  ) : (
                    user.login
                  )}
                </p>

                <p className="profile__info-about">
                  <span className="profile__info-upper">Номер телефона</span>
                  {userChange ? (
                    <InputMask
                      {...register('phone')}
                      mask={`(+\\380\\)99-999-99-99`}
                      defaultValue={user.phone}
                      type="tel"
                    />
                  ) : (
                    user.phone
                  )}
                </p>

                <p className="profile__info-about">
                  <span className="profile__info-upper">Почта</span>
                  {userChange ? (
                    <input {...register('email')} defaultValue={user.email} type="email" />
                  ) : (
                    user.email
                  )}
                </p>
                {userChange ? (
                  ''
                ) : (
                  <p className="profile__info-about">
                    <span className="profile__info-upper">Дата регистрации</span>
                    {user.date}
                  </p>
                )}
              </div>
              <div style={{ display: 'flex' }}>
                <p style={{ maxWidth: '40vw' }} className="profile__info-about">
                  <span className="profile__info-upper">Обо мне</span>
                  {userChange ? (
                    <textarea {...register('aboutme')} defaultValue={user.aboutme} />
                  ) : (
                    user.aboutme
                  )}
                </p>
              </div>
            </div>

            {userChange ? (
              <button className="change__btn" type="submit">
                Сохранить изменения
              </button>
            ) : (
              ''
            )}
          </form>

          <form onSubmit={handleSubmit(changePassword)} className="profile__content">
            <div className="profile__change">
              <h3 className="profile-content__title">Пароль</h3>
              <span className="profile-content__title2">
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ marginRight: '10px', color: '#15141b', cursor: 'pointer' }}
                />
                <span span style={{ color: '#15141b' }} onClick={() => setPassChange(!passChange)}>
                  {passChange ? 'Отменить' : 'Изменить'}
                </span>
              </span>
            </div>
            <div className="profile__info">
              <p className="profile__info-about">
                <span className="profile__info-upper">Сменить пароль</span>
                {passChange ? (
                  <input
                    {...register('password', {
                      required: 'Вы должны указать пароль',
                      minLength: {
                        value: 5,
                        message: 'Пароль должен содержать не менее 5 символов',
                      },
                    })}
                    type="password"
                  />
                ) : (
                  '*************'
                )}
                {errors?.password && <p>{errors?.password?.message}</p>}
              </p>

              <p className="profile__info-about">
                <span className="profile__info-upper">Подтвердить пароль</span>
                {passChange ? (
                  <input
                    {...register('confirm_password', {
                      validate: (value) => {
                        if (watch('password') !== value) {
                          return 'Пароли не совпадают';
                        }
                      },
                    })}
                    type="password"
                  />
                ) : (
                  '*************'
                )}
                {errors?.confirm_password && <p>{errors?.confirm_password?.message}</p>}
              </p>
            </div>
            {passChange ? (
              <button className="change__btn" type="submit">
                Сохранить изменения
              </button>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
