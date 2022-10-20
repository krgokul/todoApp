import { TaskSchema } from "./schema/task.schema";

export const tasksProviders = [
  {
    provide: 'TASK_MODEL',
    useFactory: (connection) => connection.model('task', TaskSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];