import React, { Component } from 'react';
import Tile from "./Tile";

class WeekRow extends Component {
    render() {
        const { date } = this.props;
        const monday = date.clone().startOf('isoWeek');

        return (
                <div className="calendar__row">
                    <Tile type="label" content={`W${date.week()} ${date.year()}`} />
                    <Tile type="day" content={monday.format("MMMM DD")} />
                    <Tile type="day" content={monday.add(1, 'days').format("MMMM DD")} />
                    <Tile type="day" content={monday.add(1, 'days').format("MMMM DD")} />
                    <Tile type="day" content={monday.add(1, 'days').format("MMMM DD")} />
                    <Tile type="day" content={monday.add(1, 'days').format("MMMM DD")} />
                    <Tile type="day" content={monday.add(1, 'days').format("MMMM DD")} />
                    <Tile type="day" content={monday.add(1, 'days').format("MMMM DD")} />
                    <Tile type="label" content={`W${date.week()} ${date.year()}`} />
                </div>
            )
    }
}

export default WeekRow;
