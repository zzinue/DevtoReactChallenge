import React from 'react';
import './App.scss';
import Navigation from './Components/Navigation/Navigation'
import RightSidebar from './Components/RightSidebar/RightSidebar';
import Content from './Components/Content/Content';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar';

function App() {
  return (
    <>

      <Navigation />
      <main className='Main-Container'>
        <LeftSidebar />
        <Content />
        <RightSidebar />
      </main>

    </>
  );
}

export default App;
