import React, { ReactElement } from 'react'
import CurrencyFilterButton from './CurrencyFilterButton'

interface Props {

}

export default function CurrencyFilter({ }: Props): ReactElement {
    return (
        <div>
            <h5>ВАЛЮТА</h5>
            <CurrencyFilterButton currency={"RUB"} />
            <CurrencyFilterButton currency={"USD"} />
            <CurrencyFilterButton currency={"EUR"} />
        </div>
    )
}
