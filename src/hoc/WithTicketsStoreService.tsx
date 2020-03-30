import React from "react";
import {TicketsStoreServiceConsumer} from "../context/TicketsStoreServiceContext";

const WithTicketsStoreService = () => (Wrapped:any) => {
    return (props:any) => {
        return (
            <TicketsStoreServiceConsumer>
                {
                (ticketsService) => {
            return(<Wrapped {...props} ticketsService={ticketsService}/>)
        }
    }
        </TicketsStoreServiceConsumer>
    )
    }
};

export default WithTicketsStoreService