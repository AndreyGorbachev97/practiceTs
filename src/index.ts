import { createTask, deleteTask, getTasks, updateTask } from "./taskManager";
import { Filter, Task } from "./types";

const date = new Date();

const newTask: Task = {
  id: 'task_id_1',
  createDate: date,
  description: 'Task description',
  title: 'Task title',
  status: 'pending',
};

createTask(newTask).then((message) => console.log(message));

const filter: Filter = {
  status: 'pending',
  date,
  content: 'Task',
};

getTasks(filter).then((tasks) => console.log(tasks));

const updatedTask: Task = {
  id: 'task_id_1',
  createDate: date,
  description: 'Updated description',
  title: 'Updated title',
  status: 'done',
};

updateTask(updatedTask).then((message) => console.log(message));

const taskIdToDelete = 'task_id_1';
deleteTask(taskIdToDelete).then((message) => console.log(message));