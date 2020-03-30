import React from 'react'
import BuyButton from './BuyButton'
import airlineLogo from './airlineLogo.svg'

const BuySection = (data:any) => {
    return (
        <div className="buySectionContainer">
            <img src={airlineLogo} alt="airlineLogo" />
            <BuyButton price={data.data.ticket.price} currency={" RUB"} />
        </div>
    )
};

export default BuySection
