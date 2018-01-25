import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = { name: null, startDate: null, endDate: null }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className="form">
                <div className="form__title">
                    Create event
                </div>
                <div className="form__row">
                    Event name:
                    <input className="form__input" type="text" name="name" onChange={(e) => this.onNameChange(e)}/>
                </div>
                <div className="form__row">
                    Event start time:
                    <input className="form__input"
                           type="time"
                           name="startTime"
                           onChange={(e) => this.onStartDateChange(e)} />
                </div>
                <div className="form__row">
                    Event end time:
                    <input className="form__input"
                           type="time"
                           name="endTime"
                           onChange={(e) => this.onEndDateChange(e)} />
                </div>
                <div className="form__row">
                    <button onClick={(e) => this.cancelHandler(e)} className="form__button">
                        Cancel
                    </button>
                    <button type="submit" className="form__button">
                        Submit
                    </button>
                </div>
            </form>
        );
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onStartDateChange = (event) => {
        this.setState({ startDate: event.target.value });
    }

    onEndDateChange = (event) => {
        this.setState({ endDate: event.target.value });
    }

    cancelHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log('submit', this.state);
    }
}

export default withRouter(Event);
