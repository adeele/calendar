import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { name: null, startDate: null, endDate: null, date: null, id: this.props.match.params.id }
    }

    componentDidMount() {
        fetch('/events')
            .then(res => res.json())
            .then(events => {
                const event = events.find((e) => e.id == this.state.id);
                this.setState({name: event.name, startDate: event.startDate, endDate: event.endDate, date: event.date})
            });
    }

    render() {
        const { name, startDate, endDate } = this.state;

        return (
            <form onSubmit={this.submitHandler} className="form">
                <div className="form__title">
                    Edit event
                </div>
                <div className="form__row">
                    Event name:
                    <input className="form__input"
                           type="text"
                           name="name"
                           value={name || ""}
                           onChange={(e) => this.onNameChange(e)}/>
                </div>
                <div className="form__row">
                    Event start time:
                    <input className="form__input"
                           type="time"
                           name="startTime"
                           value={startDate || ""}
                           onChange={(e) => this.onStartDateChange(e)} />
                </div>
                <div className="form__row">
                    Event end time:
                    <input className="form__input"
                           type="time"
                           name="endTime"
                           value={endDate || ""}
                           onChange={(e) => this.onEndDateChange(e)} />
                </div>
                <div className="form__row">
                    <button onClick={(e) => this.deleteHandler(e)} className="form__button">
                        Delete
                    </button>
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
        fetch('http://localhost:4000/events/edit',
            {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(r => r.json())
            .then(console.log);

        console.log('submit', this.state);
        this.props.history.push('/');
    }

    deleteHandler = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/events/delete',
            {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(r => r.json())
            .then(console.log);

        this.props.history.push('/');
    }
}

export default withRouter(Edit);
