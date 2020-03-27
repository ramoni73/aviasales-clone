import React, { ReactElement } from 'react'

interface Props {
    [key: string]: any
}

export default function Departure({ data }: Props): ReactElement {
    return (
        <div className="flightInfoContainer">
            <div className="flightInfoContainerLeft">
                <p className="time">{data.departure_time}</p>
                <p className="airport">{data.origin} {data.origin_name}</p>
                <p className="date">{data.departure_date}</p>
            </div>
            <div className="flightInfoContainerRight">
                <p className="time">{data.arrival_time}</p>
                <p className="airport">{data.destination} {data.destination_name}</p>
                <p className="date">{data.arrival_date}</p>
            </div>
        </div>
    )
}
