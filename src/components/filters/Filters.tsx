import React, { Component } from 'react';
import CurrencyFilter from './CurrencyFilter';
import TransferFilters from './TransferFilter';

class Filters extends Component {
    render() {
        return (
            <div className="filtersContainer">
                <CurrencyFilter />
                <TransferFilters />
            </div>
        );
    }
}

export default Filters;