import React, { ReactElement } from 'react'

interface Props {
    [key: string]: any
}

export default function Departure({ data }: Props): ReactElement {
    return (
        <div className="flightInfoContainer">
            <p className="time">{data.departure_time}</p>
            <p>{data.origin} {data.origin_name}</p>
            <p className="date">{data.departure_date}</p>

            <p className="time">{data.arrival_time}</p>
            <p>{data.destination}</p><p>{data.destination_name}</p>
            <p className="date">{data.arrival_date}</p>
        </div>
    )
}
