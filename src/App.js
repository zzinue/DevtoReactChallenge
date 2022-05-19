import React, { useState } from 'react';
import './App.scss';
import Navigation from './Components/Navigation/Navigation'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login';


function App() {
  const [mobileMenu, setmobileMenu] = useState(false)
  const toggle = () => {
    setmobileMenu(!mobileMenu)
  }
  return (
    <>
      <Navigation openMenu={toggle} />

      <Routes>
        <Route path="/" element={<Home burguerMenu={mobileMenu} closeMenu={toggle} />} />
        <Route path="login" element={<Login />} />
      </Routes>


    </>
  );
}

export default App;
