import { Task } from "../types";

const tasksKey = 'calendar_tasks';

export function getStoredTasks(): Task[] {
  const tasksJson = localStorage.getItem(tasksKey);
  return tasksJson ? JSON.parse(tasksJson) : [];
}