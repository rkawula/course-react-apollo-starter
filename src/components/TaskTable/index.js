import React from 'react';
import Task from "../Task";


export default class TaskTable extends React.Component {

    render() {
        return <table className="task-list">
            <tbody>
            <tr>
                <th>Title</th>
                <th>ID</th>
                <th>Category</th>
                <th>Status</th>
                <th>Created Date</th>
            </tr>
            {this.props.tasks.map((task, i) =>
                <Task
                    {...task}
                    key={`${task.title}-${i}`}
                />
            )}
            </tbody>
        </table>;
    }
}
