import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound__container">
        <h1>Запрашиваемая страница не найдена!</h1>
        <p>
          К сожалению, запрашиваемая Вами страница не найдена. Вероятно, Вы указали несуществующий
          адрес, страница была удалена, перемещена или сейчас она временно недоступна!
        </p>
        <Link to={'/'}><button className='btn'>Продолжить</button></Link>
      </div>
    </div>
  );
};

export default NotFound;
