import React from 'react';
import './App.css';
import Home from './pages/Home';
import Room from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import error from './pages/error';


function App() {
  return (
    <>
    <Home />
    <Room />
    <SingleRoom />
    <error />
    </>

  );
}

export default App;
