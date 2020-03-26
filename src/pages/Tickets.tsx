import React, { ReactElement } from 'react'
import Filters from '../components/filters/Filters'
import TicketsContainer from '../components/tickets/TicketsContainer'

interface Props {

}

export default function Tickets({ }: Props): ReactElement {
    return (
        <div>
            <Filters />
            <TicketsContainer />
        </div>
    )
}
