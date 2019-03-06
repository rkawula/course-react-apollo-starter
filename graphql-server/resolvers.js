// import { PubSub } from "graphql-subscriptions"
// import { CategoryModel, TasksModel } from "./models"

// const pubsub = new PubSub()
// const TASK_CREATED = "taskCreated"
// const TASK_DELETED = "taskDeleted"
// const TASK_UPDATED = "taskUpdated"

export const resolvers = {
    Query:  {
        hello: () => {
            return `world!`
        }
    }
}