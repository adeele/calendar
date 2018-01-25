import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import classNames from 'classnames';
import moment from 'moment';

class Tile extends Component {
    render() {
        const { type, date, content, isToday, onClick, events } = this.props;
        const classes = ['calendar__tile calendar__day', { 'day': type === 'day', 'day--today' : isToday }];

        const filteredEvents = events && events.filter((event) => date.isSame(event.startDate, 'day'));

        return (
            type === 'day' ?
                (
                    <div className={classNames(classes)} onClick={() => this.dayHandler()}>
                        <div className="day__title">
                            {date.format("MMMM DD")}
                        </div>
                        <div className="day__events">
                            {filteredEvents.map((event, index) => (
                                <div className="day__event" key={index}>
                                    {`${moment(event.startDate).format("HH:mm")}-${moment(event.endDate).format("HH:mm")} ${event.name}`}
                                </div>
                            ))}
                        </div>
                    </div>

                ) : (
                    <div className={`calendar__tile calendar__${type}`} onClick={onClick && (() => onClick())}>
                        {content}
                    </div>
                )
        );
    }

    dayHandler = () => {
        this.props.history.push('/event');
    }
}

export default withRouter(Tile);
