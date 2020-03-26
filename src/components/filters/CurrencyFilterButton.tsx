import React, { ReactElement } from 'react'

interface Props {
    currency: String
}

export default function CurrencyFilterButton({ currency }: Props): ReactElement {
    return (
        <button className="btnCurrency">{currency}</button>
    )
}
