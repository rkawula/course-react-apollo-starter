export const typeDefs = `
# Root query party time
type Query {
    tasks: [Task]
    taskCategories: [TaskCategory]
}

# A todo task.
type Task {
    id: ID!
    title: String!
    category: TaskCategory
    taskStatus: TaskStatusEnum
    createdDate: String
}

# The current status of a todo task.
enum TaskStatusEnum {
    INCOMPLETE
    COMPLETE
}

type TaskCategory {
    id: ID!
    name: String!
    color: String
}
`;