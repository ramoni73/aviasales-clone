import React, { Component } from 'react';
import CurrencyFilter from './CurrencyFilter';
import TransferFilters from './TransferFilter';

class Filters extends Component {
    render() {
        return (
            <>
                <CurrencyFilter />
                <TransferFilters />
            </>
        );
    }
}

export default Filters;