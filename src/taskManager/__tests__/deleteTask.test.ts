import { createTask } from "../createTask";
import { deleteTask } from "../deleteTask";
import { mockTask1, mockTask2 } from "../mocks";

describe('deleteTask', () => { 
  beforeEach(async () => {
    await createTask(mockTask1);
  });
  
  it('should delete an existing task', async () => {
    await deleteTask(mockTask1.id);
  
    const storedTasks = JSON.parse(localStorage.getItem('calendar_tasks') || '[]');
    expect(storedTasks).toHaveLength(0);
  });
  
  it('should return "Task not found" for non-existent task', async () => {
    const result = await deleteTask(mockTask2.id);
  
    const storedTasks = JSON.parse(localStorage.getItem('calendar_tasks') || '[]');
    expect(storedTasks).toHaveLength(1);
    expect(storedTasks[0].id).toEqual(mockTask1.id);
    expect(result).toBe('Task not found.');
  });
});
