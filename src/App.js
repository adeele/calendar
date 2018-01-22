import React, { Component } from 'react';
import moment from 'moment';

import InfoRow from "./components/InfoRow";
import WeekRow from "./components/WeekRow";

import './App.css';

class App extends Component {
    render() {
        return(
            <div className="calendar">
                <InfoRow content="prev" />
                <WeekRow date={moment().format()} />
                <WeekRow date={moment().format()} />
                <WeekRow date={moment().format()} />
                <WeekRow date={moment().format()} />
                <InfoRow content="next" />
            </div>
        );
    }
}

export default App;
