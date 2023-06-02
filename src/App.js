import React, { useContext, useEffect } from 'react';
import './App.scss';
import Layout from './components/layout';
import { CustomContext } from './components/Context/Context';


function App() {
  const {getUserFromLS} = useContext(CustomContext)

  useEffect(() => {
    getUserFromLS()
  }, [])
  return (
    <Layout />
  );
}

export default App;
