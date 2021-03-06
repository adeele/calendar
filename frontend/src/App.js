import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Calendar from './components/Calendar';
import Event from './components/Event';
import Edit from './components/Edit';

import './App.css';

class App extends Component {
    constructor(props) {
       super(props);
       this.state = { weekOffset: 0 };
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={Calendar} />
                    <Route path="/event/:date" component={Event} />
                    <Route path="/edit/:id" component={Edit} />
                </div>
            </Router>
        );
    }
}

export default App;
