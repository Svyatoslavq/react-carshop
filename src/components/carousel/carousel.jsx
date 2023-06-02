import React, { useEffect, useState } from 'react';
import './carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ItemCardCarousel from '../ItemCard/itemCardCarousel';
import { Link } from 'react-router-dom';

const Carousel = ({ cars }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = cars.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, cars]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="carousel__container">
      <section className="section">
        <div className="section-center">
          {cars.map((car, indexCar) => {
            const { id } = car;
            let position = 'nextSlice';
            if (indexCar === index) {
              position = 'activeSlide';
            }
            if (indexCar === index - 1 || (index === 0 && indexCar === car.length - 1)) {
              position = 'lastSlice';
            }
            return (
              <article className={position} key={id}>
                <Link to={`/catalog/${car.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <ItemCardCarousel car={car} />
                </Link>
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>
    </div>
  );
};
export default Carousel;
