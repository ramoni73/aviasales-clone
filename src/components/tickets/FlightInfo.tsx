import React, { ReactElement } from 'react'

interface Props {
    data: any
}

export default function Departure({ data }: Props): ReactElement {
    return (
        <div>
            <h3>{data.departure_time}</h3>
            <p>{data.origin}</p><p>{data.origin_name}</p>
            <p>{data.departure_date}</p>

            <p>{data.arrival_time}</p>
            <p>{data.destination}</p><p>{data.destination_name}</p>
            <p>{data.arrival_date}</p>
        </div>
    )
}
