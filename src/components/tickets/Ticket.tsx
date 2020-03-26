import React, { ReactElement } from 'react'
import FlightInfo from './FlightInfo'

interface Props {

}

export default function Ticket({ }: Props): ReactElement {
    const data = {
        origin: "Consequat in dolore irure.",
        origin_name: "Consequat in dolore irure.",
        destination: "Consequat in dolore irure.",
        destination_name: "Consequat in dolore irure.",
        departure_date: "Consequat in dolore irure.",
        departure_time: "Consequat in dolore irure.",
        arrival_date: "Consequat in dolore irure.",
        arrival_time: "Consequat in dolore irure.",
        carrier: "Consequat in dolore irure.",
        stops: "Consequat in dolore irure.",
        price: "Consequat in dolore irure."
    }
    return (
        <div>
            <FlightInfo data={data} />
        </div>
    )
}
