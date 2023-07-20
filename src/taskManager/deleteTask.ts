import { getStoredTasks } from "./getStoredTasks";
import { storeTasks } from "./storeTasks";

export function deleteTask(taskId: string): Promise<string> {
  const tasks = getStoredTasks();
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    storeTasks(tasks);
    return Promise.resolve('Task deleted successfully.');
  }

  return Promise.resolve('Task not found.');
}