import React from 'react'
import Filters from '../components/filters/Filters'
import TicketsContainer from '../components/tickets/TicketsContainer'

const Tickets = () => {
    return (
        <div className="grid">
            <Filters />
            <TicketsContainer />
        </div>
    )
};

export default Tickets
