import { getStoredTasks } from "./getStoredTasks";
import { storeTasks } from "./storeTasks";
import { Task } from "../types";

export function updateTask(task: Task): Promise<string> {
  const tasks = getStoredTasks();
  const taskIndex = tasks.findIndex((t) => t.id === task.id);

  if (taskIndex !== -1) {
    tasks[taskIndex] = task;
    storeTasks(tasks);
    return Promise.resolve('Task updated successfully.');
  }

  return Promise.resolve('Task not found.');
}
