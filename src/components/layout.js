import React from 'react';
import Header from './header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sell from '../pages/sell/sell';
import NotFound from '../pages/notFound/NotFound';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Account from '../pages/profile/profile';
import CatalogItem from '../pages/сatalogId/catalogId';
import Catalog from '../pages/catalog/catalog';
import Home from '../pages/home/home';
import AnotherAccount from '../pages/anotherUser/anotherUser';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="App">
      <div className="wrapper">
        {location.pathname !== '/login' && location.pathname !== '/register' ? <Header /> : ''}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sell" element={<Sell />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/anotheraccount/:id" element={<AnotherAccount />} />
          <Route exact path="/account/*" element={<Account />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/catalog/:id" element={<CatalogItem />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
