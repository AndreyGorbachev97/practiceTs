import { getStoredTasks } from "./getStoredTasks";
import { storeTasks } from "./storeTasks";
import { Task } from "../types";

export function createTask(task: Task): Promise<string> {
  const tasks = getStoredTasks();
  tasks.push(task);
  storeTasks(tasks);
  return Promise.resolve('Task created successfully.');
}