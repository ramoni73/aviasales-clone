import React from 'react';
import './App.css';
import logo from "./logo.svg";
import Tickets from './pages/Tickets';

function App() {
  return (
    <>
      <img src={logo} alt="logo" />
      <Tickets />
    </>
  );
}

export default App;
