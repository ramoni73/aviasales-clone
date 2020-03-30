import React from 'react'

const Departure = (data:any) => {
    return (
        <div className="flightInfoContainer">
            <div className="flightInfoContainerLeft">
                <p className="time">{data.data.ticket.departure_time}</p>
                <p className="airport">{data.data.ticket.origin} {data.origin_name}</p>
                <p className="date">{data.data.ticket.departure_date}</p>
            </div>
            <div className="flightInfoContainerRight">
                <p className="time">{data.data.ticket.arrival_time}</p>
                <p className="airport">{data.data.ticket.destination} {data.data.ticket.destination_name}</p>
                <p className="date">{data.data.ticket.arrival_date}</p>
            </div>
        </div>
    )
};

export default Departure
