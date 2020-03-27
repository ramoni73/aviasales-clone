import React, { ReactElement } from 'react'
import BuyButton from './BuyButton'
import airlineLogo from './airlineLogo.svg'

interface Props {
    [key: string]: any
}

export default function BuySection({ data }: Props): ReactElement {
    return (
        <div className="buySectionContainer">
            <img src={airlineLogo} alt="airlineLogo" />
            <BuyButton price={data.price} currency={" RUB"} />
        </div>
    )
}
