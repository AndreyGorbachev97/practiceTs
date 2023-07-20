import { getStoredTasks } from "./getStoredTasks";
import { Filter, Task } from "../types";

export function getTasks(filter: Filter): Promise<Task[]> {
  const tasks = getStoredTasks();
  console.log('tasks', tasks);
  // Apply filtering if provided
  const filteredTasks = tasks.filter((task) => {
    let matched = true;

    if (filter.status && task.status !== filter.status) {
      matched = false;
    }

    if (filter.date && task.createDate !== filter.date) {
      matched = false;
    }

    if (filter.content && !task.title.includes(filter.content) && !task.description.includes(filter.content)) {
      matched = false;
    }

    return matched;
  });

  return Promise.resolve(filteredTasks);
}