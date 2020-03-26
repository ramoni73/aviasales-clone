import React, { ReactElement } from 'react'

interface Props {
    title: string,
    price: any,
    currency: string
}

export default function BuyButton({ title, price, currency }: Props): ReactElement {
    return (
        <button>{title}{price}{currency}</button>
    )
}
