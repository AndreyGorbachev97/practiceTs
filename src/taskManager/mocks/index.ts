import { StatusType } from '../../types';

export const mockTask1 = {
  id: 'task_id_1',
  createDate: new Date('2023-07-20'),
  description: 'Task description 1',
  title: 'Task title 1',
  status: 'pending' as StatusType,
};

export const mockTask2 = {
  id: 'task_id_2',
  createDate: new Date('2023-07-21'),
  description: 'Task description 2',
  title: 'Task title 2',
  status: 'done' as StatusType,
};

export const mockTask3 = {
  id: 'task_id_3',
  createDate: new Date('2023-07-22'),
  description: 'Task description 3',
  title: 'Task title 3',
  status: 'fail' as StatusType,
};

export const localStorageMock = (() => {
  let store: { [key: string]: string } = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();