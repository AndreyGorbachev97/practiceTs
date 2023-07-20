export type StatusType = 'pending' | 'done' | 'fail';

export interface Task {
  id: string;
  createDate: Date;
  description: string;
  title: string;
  status: StatusType;
}

export interface TaskStored {
  id: string;
  createDate: string;
  description: string;
  title: string;
  status: StatusType;
}

export interface Filter {
  status: StatusType;
  date: Date;
  content: string;
}

export interface CalendarLibrary {
  createTask(task: Task): Promise<string>;
  getTasks(filter: Filter): Promise<Task[]>;
  updateTask(task: Task): Promise<string>;
  deleteTask(taskId: string): Promise<string>;
}