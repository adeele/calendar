import React, { Component } from 'react';
import Tile from "./Tile";

class InfoRow extends Component {
    render() {
        const { content } = this.props;

        return (
                <div className="calendar__row calendar__row--small">
                    <Tile type="button" content={content} />
                    <Tile type="label" content="Monday" />
                    <Tile type="label" content="Tuesday" />
                    <Tile type="label" content="Wednesday" />
                    <Tile type="label" content="Thursday" />
                    <Tile type="label" content="Friday" />
                    <Tile type="label" content="Saturday" />
                    <Tile type="label" content="Sunday" />
                    <Tile type="button" content={content} />
                </div>
            )
    }
}

export default InfoRow;
