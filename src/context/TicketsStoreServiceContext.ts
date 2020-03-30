import React from "react";

const {
    Provider: TicketsStoreServiceProvider,
    Consumer: TicketsStoreServiceConsumer
} = React.createContext({});

export {
    TicketsStoreServiceProvider,
    TicketsStoreServiceConsumer
}