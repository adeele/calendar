import React, { Component } from 'react';
import Tile from "./Tile";
import moment from 'moment';

class WeekRow extends Component {
    render() {
        const { date } = this.props;
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

        return (
                <div className="calendar__row">
                    <Tile type="label" content={`W${date.week()} ${date.year()}`} />
                    {
                        week.map((day, index) => {
                            console.log(day, date, day.isSame(date, 'day'));

                            return (
                                <Tile type="day"
                                      key={index}
                                      content={day.format("MMMM DD")}
                                      isToday={day.isSame(moment(), 'day')} />
                            )
                        })
                    }
                    <Tile type="label" content={`W${date.week()} ${date.year()}`} />
                </div>
            )
    }
}

export default WeekRow;
