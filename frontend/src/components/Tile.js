import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import classNames from 'classnames';
import moment from 'moment';

class Tile extends Component {
    render() {
        const { type, date, content, isToday, onClick, events } = this.props;
        const classes = ['calendar__tile calendar__day', { 'day': type === 'day', 'day--today' : isToday }];

        const filteredEvents = events && events.filter((event) => date.isSame(event.date, 'day'));

        return (
            type === 'day' ?
                (
                    <div className={classNames(classes)} onClick={() => this.dayHandler()}>
                        <div className="day__title">
                            {date.format("MMMM DD")}
                        </div>
                        <div className="day__events">
                            {filteredEvents.map((event, index) => (
                                <div className="day__event" key={index} onClick={(e) => this.eventHandler(e, event.id)}>
                                    {`${event.startDate}-${event.endDate} ${event.name}`}
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
        this.props.history.push('/event/' + this.props.date.format());
    }

    eventHandler = (event, eventId) => {
        event.stopPropagation();
        this.props.history.push('/edit/' + eventId)
    }
}

export default withRouter(Tile);
