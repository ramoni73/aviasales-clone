import * as React from 'react';
import Ticket from './Ticket';
import { connect } from 'react-redux';

export interface ITicketsContainerProps {
}

class TicketsContainer extends React.Component<ITicketsContainerProps> {
    public render() {
        return (
            <div>
                <Ticket />
                <Ticket />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        tickets: state
    }
}

export default connect(mapStateToProps)(TicketsContainer)
