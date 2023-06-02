import Select from 'react-select';
import React, { useContext } from 'react';
import { carYears, cities, brands, type } from '../Constants';
import { CustomContext } from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { debounce } from 'lodash';

const Sort = () => {
  const { filter, setFilter } = useContext(CustomContext);

  const searchCar = (e) => {
    setFilter({ ...filter, title: e.target.value });
  };

  const debounceFn = debounce(searchCar, 1000);

  const changePriceTo = (e) => {
    setFilter({ ...filter, price: { ...filter.price, to: +e.target.value } });
  };
  const changePriceFrom = (e) => {
    setFilter({ ...filter, price: { ...filter.price, from: +e.target.value } });
  };
  const priceDebounceTo = debounce(changePriceTo, 1000);
  const priceDebounceFrom = debounce(changePriceFrom, 1000);

  return (
    <div className="sort">
      <div className="sort__search">
        <i className="fa">
          {' '}
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#000000' }} />
        </i>
        <input onChange={debounceFn} placeholder="Поиск..." className="sort__inp" />
      </div>
      <div className="sort__container">
        <div className="sort__col">
          <div className="sort__item">
            <Select
              styles={{
                singleValue: (defaultStyles, state) => ({
                  ...defaultStyles,
                  borderRadius: '0px',
                  backgroundColor: '#312f3d',
                  outline: state.isFocused && 'none',
                  color: state.isSelected && '#d4d4d4',
                }),
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: '0px',
                  border: 'none',
                  backgroundColor: '#312f3d',
                  boxShadow: 'none',
                  '&:hover': {
                    border: '1px solid  #c4c4c4b0',
                  },
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  borderRadius: '0px',
                  backgroundColor: state.isSelected ? '#38354b' : '#312f3d',
                  color: state.isSelected ? '#743ecc' : '#d4d4d4',
                }),
              }}
              options={brands}
              placeholder="Марка"
              classNamePrefix="react-select"
              defaultValue={filter.brand}
              onChange={(e) => setFilter({ ...filter, brand: e.value })}
            />
          </div>
          <div className="sort__item">
            <Select
              styles={{
                singleValue: (defaultStyles, state) => ({
                  ...defaultStyles,
                  borderRadius: '0px',
                  backgroundColor: '#312f3d',
                  outline: state.isFocused && 'none',
                  color: state.isSelected && '#d4d4d4',
                }),
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: '0px',
                  border: 'none',
                  backgroundColor: '#312f3d',
                  boxShadow: 'none',
                  '&:hover': {
                    border: '1px solid  #c4c4c4b0',
                  },
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  borderRadius: '0px',
                  backgroundColor: state.isSelected ? '#38354b' : '#312f3d',
                  color: state.isSelected ? '#743ecc' : '#d4d4d4',
                }),
              }}
              placeholder="Год выпуска"
              options={carYears}
              classNamePrefix="react-select"
              defaultValue={filter.year}
              onChange={(e) => setFilter({ ...filter, year: e.value })}
            />
          </div>
          <div className="sort__item">
            <div className="sort__item-content">
              <input
                onChange={priceDebounceFrom}
                placeholder="Цена от"
                className="sell__inp-item"
              />
              <input onChange={priceDebounceTo} placeholder="Цена до" className="sell__inp-item" />
            </div>
          </div>
        </div>
        <div className="sort__col">
          <div className="sort__item">
            <Select
              styles={{
                singleValue: (defaultStyles, state) => ({
                  ...defaultStyles,
                  borderRadius: '0px',
                  backgroundColor: '#312f3d',
                  outline: state.isFocused && 'none',
                  color: state.isSelected && '#d4d4d4',
                }),
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: '0px',
                  border: 'none',
                  backgroundColor: '#312f3d',
                  boxShadow: 'none',
                  '&:hover': {
                    border: '1px solid  #c4c4c4b0',
                  },
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  borderRadius: '0px',
                  backgroundColor: state.isSelected ? '#38354b' : '#312f3d',
                  color: state.isSelected ? '#743ecc' : '#d4d4d4',
                }),
              }}
              placeholder="Город"
              options={cities}
              classNamePrefix="react-select"
              defaultValue={filter.city}
              onChange={(e) => setFilter({ ...filter, city: e.value })}
            />
          </div>
          <div className="sort__item">
            <Select
              styles={{
                singleValue: (defaultStyles, state) => ({
                  ...defaultStyles,
                  borderRadius: '0px',
                  backgroundColor: '#312f3d',
                  outline: state.isFocused && 'none',
                  color: state.isSelected && '#d4d4d4',
                }),
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: '0px',
                  border: 'none',
                  backgroundColor: '#312f3d',
                  boxShadow: 'none',
                  '&:hover': {
                    border: '1px solid  #c4c4c4b0',
                  },
                }),
                option: (baseStyles, state) => ({
                  ...baseStyles,
                  borderRadius: '0px',
                  backgroundColor: state.isSelected ? '#38354b' : '#312f3d',
                  color: state.isSelected ? '#743ecc' : '#d4d4d4',
                }),
              }}
              placeholder="Тип кузова"
              options={type}
              classNamePrefix="react-select"
              defaultValue={filter.type}
              onChange={(e) => setFilter({ ...filter, type: e.value })}
            />
          </div>
          <div className="sort__item">
            <button
              onClick={() =>
                setFilter({
                  brand: '',
                  year: '',
                  city: '',
                  type: '',
                  price: { from: '', to: '100000' },
                  title: '',
                })
              }
              className="sort__btn1"
            >
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
