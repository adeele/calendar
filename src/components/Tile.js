import React, { Component } from 'react';
import classNames from 'classnames';

class Tile extends Component {
    render() {
        const { type, content, onClick } = this.props;

        return(
            <div className={classNames(`calendar__tile calendar__${type}`, { 'day': type === 'day' })}
                onClick={() => onClick()}>
                {
                    type === 'day' ?
                        (
                            <div className="day__title">
                                {content}
                            </div>
                        ) :
                        content
                }
            </div>
        );
    }
}

export default Tile;
