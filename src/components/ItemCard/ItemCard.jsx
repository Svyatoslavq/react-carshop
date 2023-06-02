import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ car }) => {
  return (
    <div key={car.id} className="item-container">
      <Link to={`/catalog/${car.id}`} style={{textDecoration: "none",  color: 'black'}}>
        <div className="item-border">
          <div className="item-img">
              <div
                className="item-image"
                style={{ backgroundImage: 'url(' + car.imageUrl + ')', width: 460, height: 220 }}
              />
          </div>
          <div className="item-content">
            <div className="item-title">
              <p className="title">{car.title} </p>
              <p className="item-city">·{car.city}</p>
            </div>
            <div className="item-description">
              <div className="item-price">Цена: {car.price}$</div>
              <div className="item-mileage">Пробег: {car.mileage}км</div>
              <div className="item-year">Год выпуска: {car.year}</div>
            </div>
            <div className="item-rating">{car.description}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
