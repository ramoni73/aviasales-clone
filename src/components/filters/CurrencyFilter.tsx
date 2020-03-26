import React, { ReactElement } from 'react'
import CurrencyFilterButton from './CurrencyFilterButton'

interface Props {

}

export default function CurrencyFilter({ }: Props): ReactElement {
    return (
        <div>
            <p className="filterText">ВАЛЮТА</p>
            <CurrencyFilterButton currency={"RUB"} />
            <CurrencyFilterButton currency={"USD"} />
            <CurrencyFilterButton currency={"EUR"} />
        </div>
    )
}
