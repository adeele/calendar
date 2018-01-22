import React, { Component } from 'react';
import classNames from 'classnames';

class Tile extends Component {
    render() {
        const { type, content } = this.props;

        return(
            <div className={
                classNames('calendar__tile', {
                    'calendar__button': type === 'button',
                    'calendar__label': type === 'label'
                })
            }>
                {content}
            </div>
        );
    }
}

export default Tile;
