import React, { Component } from 'react';
import moment from 'moment';

import InfoRow from "./InfoRow";
import WeekRow from "./WeekRow";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = { weekOffset: 0, events: [] };
    }

    componentDidMount() {
        fetch('/events')
            .then(res => res.json())
            .then(events => this.setState({events: events}));
    }

    render() {
        const { weekOffset } = this.state;

        return (
            <div className="calendar">
                <InfoRow content="prev" onClick={(e) => this.setOffset(-1)} />
                <WeekRow date={moment().add(weekOffset, 'week')} events={this.state.events}/>
                <WeekRow date={moment().add(weekOffset + 1, 'week')} events={this.state.events} />
                <WeekRow date={moment().add(weekOffset + 2, 'week')} events={this.state.events} />
                <WeekRow date={moment().add(weekOffset + 3, 'week')} events={this.state.events} />
                <InfoRow content="next" onClick={() => this.setOffset(1)} />
            </div>
        );
    }

    setOffset = (offset) => {
        this.setState({ weekOffset: this.state.weekOffset + offset});
    }
}

export default Calendar;
