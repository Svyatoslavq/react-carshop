import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CustomContext } from '../../components/Context/Context';

const Login = () => {
  const { loginUser } = useContext(CustomContext);

  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit(loginUser)}>
        <h2> Вход </h2>{' '}
        <input
          {...register('email')}
          type="email"
          placeholder="Введите email"
          className="form__email"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Введите пароль"
          className="form__password"
        />
        <button type="submit" className="form__btn">
          Войти{' '}
        </button>{' '}
        <p>
          Нет аккаунта ?{' '}
          <Link to="/register" className="form__signup">
            Зарегистрироваться{' '}
          </Link>{' '}
        </p>{' '}
      </form>{' '}
    </div>
  );
};

export default Login;
