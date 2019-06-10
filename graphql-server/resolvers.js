// import { PubSub } from "graphql-subscriptions"
import { CategoryModel, TasksModel } from "./models"

// const pubsub = new PubSub()
// const TASK_CREATED = "taskCreated"
// const TASK_DELETED = "taskDeleted"
// const TASK_UPDATED = "taskUpdated"

export const resolvers = {
    Query:  {
        tasks: async () => {
            const filters = {};
            const res = await TasksModel.getTasks(filters);
            return res.tasks;
        },
        taskCategories: async () => {
            return await CategoryModel.getCategories();
        }
    }
}