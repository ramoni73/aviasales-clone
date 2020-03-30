import * as React from 'react';
import Ticket from './Ticket';
import WithTicketsStoreService from "../../hoc/WithTicketsStoreService";

const TicketsContainer = ({ticketsService}:any) => {
    const tickets = ticketsService.getTickets().tickets
        .map((ticket:any) => {
            return <Ticket key={ticket.id} ticket={ticket} />
        });

    return (
        <div>
            {tickets}
        </div>
    );
};

export default WithTicketsStoreService()(TicketsContainer)
