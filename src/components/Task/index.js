import React from 'react';


export default class Task extends React.Component {

    render() {
        return <tr className="task-item">
            <td>{this.props.title}</td>
            <td>{this.props.id}</td>
            <td>{this.props.category}</td>
            <td>{this.props.taskStatus}</td>
            <td>{this.props.createdDate}</td>
        </tr>;
    }
}