import React from 'react'
import CurrencyFilterButton from './CurrencyFilterButton'

const CurrencyFilter = () => {
    return (
        <div>
            <p className="filterText">ВАЛЮТА</p>
            <CurrencyFilterButton currency={"RUB"} />
            <CurrencyFilterButton currency={"USD"} />
            <CurrencyFilterButton currency={"EUR"} />
        </div>
    )
};

export default CurrencyFilter
