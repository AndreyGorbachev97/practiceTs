import { Filter } from "../../types";
import { createTask } from "../createTask";
import { getTasks } from "../getTasks";
import { localStorageMock, mockTask1, mockTask2, mockTask3 } from "../mocks";

describe('getTasks', () => {
  beforeEach(async () => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    localStorage.clear();
    await createTask(mockTask1);
    await createTask(mockTask2);
    await createTask(mockTask3);
  });

  it('should return all tasks', async () => {
    const tasks = await getTasks({} as Filter);

    expect(tasks).toHaveLength(3);
  });

  it('should filter tasks by status', async () => {
    const tasks = await getTasks({ status: 'pending' } as Filter);

    expect(tasks).toHaveLength(1);
  });

  it('should filter tasks by date', async () => {
    console.log()
    const tasks = await getTasks({ date: new Date('2023-07-21') } as Filter);

    expect(tasks).toHaveLength(1);
  });

  it('should filter tasks by content', async () => {
    const tasks = await getTasks({ content: 'Task title 3' } as Filter);

    expect(tasks).toHaveLength(1);
  });

  it('should return an empty array for non-matching filter', async () => {
    const tasks = await getTasks({ status: 'done', date: new Date('2023-07-25'), content: 'Some non-existent task' });

    expect(tasks).toHaveLength(0);
  });
});