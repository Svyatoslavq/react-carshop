import React, { useContext } from 'react';
import { CustomContext } from '../../components/Context/Context';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { date } from '../../components/Constants';
import InputMask from 'react-input-mask';

const Register = () => {
  const { registerUser } = useContext(CustomContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  console.log(date);

  return (
    <div className="signup">
      <form className="register" onSubmit={handleSubmit(registerUser)}>
        <h2 className="register__title">Регистрация</h2>

        <input
          {...register('email', {
            required: 'Это поле обязательное *',
          })}
          className="register__email"
          type="email"
          id="email"
          placeholder="Введите email"
        />
        <span className="register__error">{errors?.email?.message}</span>
        <input
          {...register('login', { required: 'Это поле обязательное *' })}
          className="register__login"
          type="text"
          placeholder="Введите login"
        />
        <span className="register__error">{errors?.login?.message}</span>

        <InputMask
          {...register('phone', { required: 'Это поле обязательное *' })}
          mask={`(+\\380\\)99-999-99-99`}
          className="register__phone"
          type="tel"
          placeholder="Введите номер"
        />

        <span className="register__error">{errors?.phone?.message}</span>
        <input
          {...register('password', {
            required: 'Это поле обязательное *',
            pattern: {
              value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{4,}/g,
              message: 'Пароль должен содержать минимум 5 символов, 0-9 a-Z',
            },
          })}
          className="register__password"
          type="new-password"
          placeholder="Введите пароль"
        />
        <span className="register__error">{errors?.password?.message}</span>
        <input
          {...register('confirm_password', {
            validate: (value) => {
              if (watch('password') !== value) {
                return 'Пароли не совпадают';
              }
            },
          })}
          className="register__password"
          type="password"
          placeholder="Подтвердите пароль"
        />
        <button {...register('date', { date })} className="register__btn" type="submit">
          Регистрация
        </button>
        <div className="register__rules">
          <input
            type="checkbox"
            {...register('date')}
            defaultValue={date}
            style={{ backgroundColor: '#38354b' }}
          />{' '}
          <p>Я принимаю условия Пользовательского соглашения</p>
        </div>
        <p>
          Есть аккаунт?{' '}
          <Link to="/login" className="register__signin">
            Ввойти
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
