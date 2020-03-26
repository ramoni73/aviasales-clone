import React, { ReactElement } from 'react'
import TransferFilterCheckbox from './TransferFilterCheckbox'

interface Props {
    
}

export default function TransferFilter({}: Props): ReactElement {
    return (
        <div>
            <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
            <TransferFilterCheckbox title={"Все"} />
            <TransferFilterCheckbox title={"Без пересадок"} />
            <TransferFilterCheckbox title={"1 пересадка"} />
            <TransferFilterCheckbox title={"2 пересадки"} />
            <TransferFilterCheckbox title={"3 пересадки"} />
        </div>
    )
}
