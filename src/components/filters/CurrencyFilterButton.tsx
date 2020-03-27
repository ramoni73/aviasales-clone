import React, { ReactElement } from 'react'

interface Props {
    [key: string]: any
}

export default function CurrencyFilterButton({ currency }: Props): ReactElement {
    return (
        <button className="btnCurrency">{currency}</button>
    )
}
