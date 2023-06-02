import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const CustomContext = createContext();

export const Context = (props) => {
  
  const [isYear, setIsYear] = useState('Все');
  const [isBrand, setIsBrand] = useState('Все');

const navigate = useNavigate();

const [page, setPage] = useState(1);
const [user, setUser] = useState({
  
  email: '',
    login: '',
    phone: '',
    date: ''
  });

  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState({
    brand: '',
    year: '',
    city: '',
    type: '',
    price: { from: '', to: '100000' },
    title: ''
  })
  
  const getUserFromLS = () => {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }

  const getAllCars = (filter) => {
    if (JSON.parse(localStorage.getItem('user')) === null) {
      setIsLoading(true);
      axios.get(`http://localhost:8080/items`)
      .then(({ data }) => {
        setCars(data);
        setIsLoading(false);
      })
        
    } else{
      setIsLoading(true);
    axios.get(`http://localhost:8080/items?${filter?.city?.length ? `city=${filter.city}` : ''}${filter?.brand?.length ? `&brand=${filter.brand}` : ''}${filter?.year?.length ? `&year=${filter.year}` : ''}`).then(({ data }) => {
      setCars(data);
      setIsLoading(false);
        setUser(JSON.parse(localStorage.getItem('user')))
    });
  }}
  
  const getCarsById = (id) => {
    setIsLoading(true);
    axios(`http://localhost:8080/items?creator.id=${id}`)
      .then(({ data }) => {
        setCars(data);
        setIsLoading(false)
      })
  }

  const registerUser = (data) => {
    axios.post('http://localhost:8080/register', { ...data, orders: [] }).then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      navigate('/');
    });
  }


  const loginUser = (data) => {
    axios.post('http://localhost:8080/login', data)
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      navigate('/');
    })

  }

  const logOutUser = () =>{
    localStorage.removeItem('user')
    setUser({
      login: ''
    })
  }

    const value = {
      user,
      setUser,
      registerUser,
      logOutUser,
      loginUser,
      isBrand,
      setIsBrand,
      isYear, 
      setIsYear,
      page,
      setPage,
      getAllCars,
      getUserFromLS,
      getCarsById,
      cars,
      isLoading,
      filter,
      setFilter
    };

    return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>;
};
