import { Task } from "../types";

const tasksKey = 'calendar_tasks';

export function storeTasks(tasks: Task[]): void {
  const tasksJson = JSON.stringify(tasks);
  localStorage.setItem(tasksKey, tasksJson);
}