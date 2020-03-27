import React, { ReactElement } from 'react'
import Ticket from './Ticket'

interface Props {
    
}

export default function TicketsContainer({}: Props): ReactElement {
    return (
        <div>
            <Ticket />
            <Ticket />
        </div>
    )
}
