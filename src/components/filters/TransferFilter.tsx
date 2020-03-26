import React, { ReactElement } from 'react'
import TransferFilterCheckbox from './TransferFilterCheckbox'

interface Props {
    
}

export default function TransferFilter({}: Props): ReactElement {
    return (
        <div>
            <p className="filterText">КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <TransferFilterCheckbox title={"Все"} value={"all"} />
            <TransferFilterCheckbox title={"Без пересадок"} value={0} />
            <TransferFilterCheckbox title={"1 пересадка"} value={1} />
            <TransferFilterCheckbox title={"2 пересадки"} value={2} />
            <TransferFilterCheckbox title={"3 пересадки"} value={3} />
        </div>
    )
}
