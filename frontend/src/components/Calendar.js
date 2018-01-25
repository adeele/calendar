import React, { Component } from 'react';
import moment from 'moment';

import InfoRow from "./InfoRow";
import WeekRow from "./WeekRow";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = { weekOffset: 0 };
    }

    render() {
        const { weekOffset } = this.state;

        return (
            <div className="calendar">
                <InfoRow content="prev" onClick={(e) => this.setOffset(-1)} />
                <WeekRow date={moment().add(weekOffset, 'week')} />
                <WeekRow date={moment().add(weekOffset + 1, 'week')} />
                <WeekRow date={moment().add(weekOffset + 2, 'week')} />
                <WeekRow date={moment().add(weekOffset + 3, 'week')} />
                <InfoRow content="next" onClick={() => this.setOffset(1)} />
            </div>
        );
    }

    setOffset = (offset) => {
        this.setState({ weekOffset: this.state.weekOffset + offset});
    }
}

export default Calendar;
