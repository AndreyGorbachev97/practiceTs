import { getStoredTasks } from "./getStoredTasks";
import { Filter, Task } from "../types";

function parseDateFromJSON(jsonDate: any): Date {
  return new Date(jsonDate);
}

export function getTasks(filter: Filter): Promise<Task[]> {
  const tasks = getStoredTasks();
  console.log('tasks', tasks);
  // Apply filtering if provided
  const filteredTasks = tasks.filter((task) => {
    let matched = true;

    if (filter.status && task.status !== filter.status) {
      matched = false;
    }

    if (filter.date && (parseDateFromJSON(task.createDate) as Date).getTime() !== filter.date.getTime()) {
      matched = false;
    }

    if (filter.content && !task.title.includes(filter.content) && !task.description.includes(filter.content)) {
      matched = false;
    }

    return matched;
  });

  return Promise.resolve(filteredTasks);
}