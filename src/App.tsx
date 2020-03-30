import React from 'react';
import './App.css';
import logo from "./logo.svg";
import Tickets from './pages/Tickets';
import WithTicketsStoreService from './hoc/WithTicketsStoreService'

const App = ({ticketsService}:any) => {
    console.log(ticketsService.getTickets());
    return (
        <>
            <div className="a-center"><img src={logo} alt="logo" /></div>
            <Tickets />
        </>
    );
};

export default WithTicketsStoreService()(App);
