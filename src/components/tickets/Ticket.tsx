import React from 'react'
import FlightInfo from './FlightInfo'
import BuySection from './BuySection'

const Ticket = (ticket:any) => {
    return (
        <div className="ticketContainer">
            <BuySection data={ticket} />
            <FlightInfo data={ticket} />
        </div>
    )
};

export default Ticket