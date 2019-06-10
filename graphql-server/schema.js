export const typeDefs = `
type Query {
  tasks: [Task]
  taskCategories: [TaskCategory]
}

type Task {
 id: ID!
 title: String!
 category: TaskCategory
 taskStatus: TaskStatusEnum
}

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
