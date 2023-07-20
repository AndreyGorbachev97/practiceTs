import { Task } from "../../types";
import { createTask } from "../createTask";
import { localStorageMock, mockTask1, mockTask2 } from "../mocks";
import { updateTask } from "../updateTask";

describe('updateTask', () => {
  beforeEach(async () => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    localStorage.clear();
    await createTask(mockTask1);
  });

  it('should update an existing task', async () => {
    const updatedTask = { ...mockTask1, status: 'done', description: 'Updated description' };
    await updateTask(updatedTask as Task);

    const storedTasks = JSON.parse(localStorage.getItem('calendar_tasks') || '[]');
    expect(storedTasks).toHaveLength(1);
    expect(storedTasks[0].description).toEqual(updatedTask.description);
  });

  it('should return "Task not found" for non-existent task', async () => {
    const nonExistentTask = { ...mockTask2, status: 'done', description: 'Updated description' };
    const result = await updateTask(nonExistentTask  as Task);

    const storedTasks = JSON.parse(localStorage.getItem('calendar_tasks') || '[]');
    expect(storedTasks).toHaveLength(1);
    expect(storedTasks[0].id).toEqual(mockTask1.id);
    expect(result).toBe('Task not found.');
  });
});
