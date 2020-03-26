import React, { ReactElement } from 'react'
import BuyButton from './BuyButton'
import airlineLogo from './airlineLogo.svg'

interface Props {
    
}

export default function BuySection({}: Props): ReactElement {
    return (
        <div>
            <img src={airlineLogo} alt="airlineLogo" />
            <BuyButton title={"Купить за"}  price={"22 000"} currency={"RUB"} />
        </div>
    )
}
