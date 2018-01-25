import React, { Component } from 'react';
import Tile from "./Tile";
import moment from 'moment';

class WeekRow extends Component {
    render() {
        const { date, events } = this.props;
        const monday = date.clone().startOf('isoWeek');
        const week = [
            monday,
            monday.clone().add(1, 'days'),
            monday.clone().add(2, 'days'),
            monday.clone().add(3, 'days'),
            monday.clone().add(4, 'days'),
            monday.clone().add(5, 'days'),
            monday.clone().add(6, 'days'),
        ];

        const filteredEvents = events.filter((event) => date.isSame(event.startDate, 'week'));

        return (
            <div className="calendar__row">
                <Tile type="label" content={`W${date.week()} ${date.year()}`} />
                {
                    week.map((day, index) => (
                        <Tile type="day"
                              key={index}
                              date={day}
                              isToday={day.isSame(moment(), 'day')}
                              events={filteredEvents} />
                    ))
                }
                <Tile type="label" content={`W${date.week()} ${date.year()}`} />
            </div>
        )
    }
}

export default WeekRow;
