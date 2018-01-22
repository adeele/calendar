import React, { Component } from 'react';
import Tile from "./Tile";

class WeekRow extends Component {
    render() {
        return (
                <div className="calendar__row calendar__row--large">
                    <Tile type="label" content="W" />
                    <Tile type="day" content="" />
                    <Tile type="day" content="" />
                    <Tile type="day" content="" />
                    <Tile type="day" content="" />
                    <Tile type="day" content="" />
                    <Tile type="day" content="" />
                    <Tile type="day" content="" />
                    <Tile type="label" content="W" />
                </div>
            )
    }
}

export default WeekRow;
