import { createTask } from "../createTask";
import { mockTask1, mockTask2, localStorageMock } from "../mocks";

function parseDateFromJSON(jsonDate: string): Date {
  return new Date(jsonDate);
}

describe('createTask', () => {
  afterEach(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    localStorage.clear();
  });

  it('should add a task to localStorage', async () => {
    await createTask(mockTask1);

    const storedTasks = JSON.parse(localStorage.getItem('calendar_tasks') || '[]');
    expect(storedTasks).toHaveLength(1);
    expect(parseDateFromJSON(storedTasks[0].createDate)).toEqual(mockTask1.createDate);
    expect(storedTasks[0].description).toEqual(mockTask1.description);
    expect(storedTasks[0].status).toEqual(mockTask1.status);
    expect(storedTasks[0].title).toEqual(mockTask1.title);
    expect(storedTasks[0].id).toEqual(mockTask1.id);
  });

  it('should record multiple tasks', async () => {
    await createTask(mockTask1);
    await createTask(mockTask2);

    const storedTasks = JSON.parse(localStorage.getItem('calendar_tasks') || '[]');
    expect(storedTasks).toHaveLength(2);
    expect(storedTasks[0].id).toEqual(mockTask1.id);
    expect(storedTasks[1].id).toEqual(mockTask2.id);
  });
});