import React, { useContext, useEffect } from 'react';
import { CustomContext } from '../../components/Context/Context';
import { useParams } from 'react-router-dom';
import ItemCard from '../../components/ItemCard/ItemCard';

const AnotherAccount = () => {
  const params = useParams();
  const { cars, getCarsById } = useContext(CustomContext);

  useEffect(() => {
    getCarsById(params.id);
  }, []);

  return (
    <div className="user__container">
      <div className="user__info">
        <div
          className="user__avatar"
          style={
            cars[0]?.creator?.avatar
              ? {
                  backgroundImage: 'url(' + cars[0]?.creator?.avatar + ')',
                  width: 180,
                  height: 180,
                }
              : {
                  backgroundImage:
                    'url(' +
                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' +
                    ')',
                  width: 180,
                  height: 180,
                }
          }
        />
        <div className="user__charact">
          <h2>{cars[0]?.creator?.login}</h2>
          <span>{cars[0]?.creator?.phone}</span>
          <p>{cars[0]?.creator?.aboutme}</p>
        </div>
      </div>
      <h1 style={{ margin: '30px 0' }}>Объявления пользователя:</h1>

      {cars.map((car, index) => (
        <ItemCard key={index} car={car} />
      ))}
    </div>
  );
};

export default AnotherAccount;
