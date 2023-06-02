import React, { useContext, useEffect } from 'react';
import { CustomContext } from '../../components/Context/Context.js';
import Sort from '../../components/Sort/Sort.jsx';
import ItemCard from '../../components/ItemCard/ItemCard';

const Catalog = () => {
  const { getAllCars, cars, isLoading, filter } = useContext(CustomContext);

  useEffect(() => {
    getAllCars(filter);
  }, [filter]);

  return (
    <div className="content">
      <div className="content-container">
        <div className="cars-container">
          <div className="items-header"></div>
          <Sort cars={cars} />
          {isLoading ? (
            <div className="loader__container">
              <span className="loader"></span>
            </div>
          ) : cars.length ? (
            cars
              .filter((el) => el.price >= +filter?.price?.from && el.price < +filter?.price?.to)
              .filter((el) => el.title.toLowerCase().includes(filter?.title?.toLowerCase()))
              .map((car, i) => <ItemCard key={i} car={car} />)
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Машины с такими параметрами отсутствуют😪</h1>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Catalog;
