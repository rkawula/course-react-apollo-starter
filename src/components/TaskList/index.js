import React, { Fragment } from "react"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {List} from "antd";
import TaskItem from '../TaskItem';


const TASKS_QUERY = gql`
query TASKS_LIST {
    tasks {
        id
        title
        taskStatus
        createdDate
    }
}`
;


const TaskList = () => (
  <Query
    query={TASKS_QUERY}
  >
      {
          ({ data, error, loading }) => {
              if (error) {
                  return <h1>{error.message}</h1>;
              }
              console.log(data);
              // return <div className="task-list">
              //     <h2>Task List</h2>
              //     <TaskTable
              //       tasks={data.tasks}
              //     />
              // </div>;
              return <List
                  loading={loading}
                  style={{background: `#fff`}}
                  bordered
                  dataSource={data.tasks}
                  renderItem={item => (
                      <List.Item key={item.id}>
                          <TaskItem
                              id={item.id}
                              title={item.title}
                          />
                      </List.Item>)}
                />;
          }
      }
  </Query>
);

export default TaskList;
