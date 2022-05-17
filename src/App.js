import React, { useState } from 'react';
import './App.scss';
import Navigation from './Components/Navigation/Navigation'
import RightSidebar from './Components/RightSidebar/RightSidebar';
import Content from './Components/Content/Content';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar';

function App() {
  const [mobileMenu, setmobileMenu] = useState(false)
  const toggle = () => {
    setmobileMenu(!mobileMenu)
  }
  return (
    <>

      <Navigation openMenu={toggle} />
      <main className='Main-Container'>
        <LeftSidebar burguerMenu={mobileMenu} closeMenu={toggle} />
        <Content />
        <RightSidebar />
      </main>

    </>
  );
}

export default App;
