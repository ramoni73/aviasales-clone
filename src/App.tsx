import React from 'react';
import './App.css';
import logo from "./logo.svg";
import Tickets from './pages/Tickets';

function App() {
  return (
    <>
    <div className="a-center"><img src={logo} alt="logo" /></div>
      <Tickets />
    </>
  );
}

export default App;
