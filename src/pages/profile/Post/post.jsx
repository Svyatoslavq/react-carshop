import React, { useContext, useEffect } from 'react';
import { CustomContext } from '../../../components/Context/Context';
import ItemCard from '../../../components/ItemCard/ItemCard';

const Post = () => {
  const { cars, getCarsById, user } = useContext(CustomContext);

  useEffect(() => {
    getCarsById(user.id);
  }, []);

  return (
    <div>
      <div className="profile__header">
        <h2 className="profile__title">Мои объявление</h2>
      </div>
      <div className="post__container">
        {cars.map((car) => (
          <ItemCard car={car} />
        ))}
      </div>
    </div>
  );
};

export default Post;
