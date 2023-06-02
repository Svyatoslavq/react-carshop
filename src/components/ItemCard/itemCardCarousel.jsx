import React from 'react';

const ItemCardCarousel = ({ car }) => {
  return (
    <div className="item-container" style={{margin: '0', width: '1200px'}}>
        <div className="item-border2">
          <div className="item-img">
              <div
                className="item-image"
                style={{ backgroundImage: 'url(' + car.imageUrl + ')', width: 680, height: 320 }}
              />
          </div>
          <div className="item-content">
            <div className="item-title">
              <p className="title">{car.title} </p>
              <p className="item-city">·{car.city}</p>
            </div>
            <div className="item-description">
              <div className="item-price">Цена - {car.price}$</div>
              <div className="item-mileage">Пробег - {car.mileage}км</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ItemCardCarousel;
