import React, { ReactElement } from 'react'

interface Props {
    [key: string]: any
}

export default function BuyButton({ price, currency }: Props): ReactElement {
    return (
        <button className="btnBuy">
            <div>Купить</div>
            за {price}{currency}
        </button>
    )
}
