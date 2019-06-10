import React from 'react';

export default class TaskItem extends React.Component {

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}
