import React, { ReactElement } from 'react'
import FlightInfo from './FlightInfo'
import BuySection from './BuySection'

interface Props {

}

export default function Ticket({ }: Props): ReactElement {
    const data = {
        origin: "VVO",
        origin_name: "Владивосток",
        destination: "TLV",
        destination_name: "Тель - Авив",
        departure_date: "12.05.18",
        departure_time: "16:20",
        arrival_date: "12.05.18",
        arrival_time: "22:10",
        carrier: "TK",
        stops: 3,
        price: 12400,
    }
    return (
        <div className="ticketContainer">
            <BuySection data={data} />
            <FlightInfo data={data} />
        </div>
    )
}
