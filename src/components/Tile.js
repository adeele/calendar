import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import classNames from 'classnames';

class Tile extends Component {
    render() {
        const { type, content, isToday, onClick } = this.props;
        const classes = ['calendar__tile calendar__day', { 'day': type === 'day', 'day--today' : isToday }];

        return (
            type === 'day' ?
                (
                    <div className={classNames(classes)} onClick={() => this.dayHandler()}>
                        <div className="day__title">
                            {content}
                        </div>
                        <div className="day__events">
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
