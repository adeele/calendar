import React, { Component } from 'react';

class Event extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        Create event
                    </div>
                    <div>
                        Event name:
                        <input type="text" name="name" />
                    </div>
                    <div>
                        Event start time:
                        <input type="text" name="startTime" />
                    </div>
                    <div>
                        Event end time:
                        <input type="text" name="endTime" />
                    </div>
                    <div>
                        <input type="cancel" value="Cancel" />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }

    submitHandler = (event) => {
        console.log(event);
    }
}

export default Event;
