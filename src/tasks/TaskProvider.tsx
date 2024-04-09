import { ReactNode, useReducer, useState } from 'react';
import { Task } from '../App';
import TaskContext from './taskContext';

interface AddTask {
  type: 'ADD';
  task: Task;
}

interface DeleteTask {
  type: 'DELETE';
  taskId: number;
}

interface UpdateTask {
  type: 'UPDATE';
  task: Task;
}

interface ToggleTask {
  type: 'TOGGLE_TASK';
  taskId: number;
}

interface MarkAllComplete {
  type: 'MARK_ALL_COMPLETE';
}

// interface AllTasks {
//   type: 'ALL_TASKS';
// }

// interface CompleteTasks {
//   type: 'COMPLETE_TASKS';
// }

// interface UnCopmleteTasks {
//   type: 'UNCOMPLETE_TASKS';
// }

export type TaskAction =
  | AddTask
  | DeleteTask
  | UpdateTask
  | ToggleTask
  | MarkAllComplete;
// | CompleteTasks
// | UnCopmleteTasks;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [...tasks, action.task];
    case 'DELETE':
      return tasks.filter((taskItem) => taskItem.id !== action.taskId);
    case 'UPDATE':
      return tasks.map((taskItem) =>
        taskItem.id === action.task.id ? { ...action.task } : taskItem
      );
    case 'TOGGLE_TASK':
      return tasks.map((task) =>
        task.id === action.taskId ? { ...task, complate: !task.complate } : task
      );
    case 'MARK_ALL_COMPLETE':
      return tasks.map((task) =>
        !task.complate ? { ...task, complate: true } : task
      );
    // case 'COMPLETE_TASKS':
    //   return tasks.filter((task) => task.complate === true);
    // case 'UNCOMPLETE_TASKS':
    //   return tasks.filter((task) => task.complate === false);
    default:
      return tasks;
  }
};

interface Props {
  children: ReactNode;
}
const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onSelectedTask = (task: Task | null) => {
    setSelectedTask(task);
    const value = task?.task === undefined ? '' : task.task;
    setInputValue(value);
  };

  const onStateFilter = (state: string) => {
    setStateFilter(state);
  };

  const onSearchQuery = (searchParam: string) => {
    setSearchQuery(searchParam);
  };

  const onInputValue = (inputValue: string) => {
    setInputValue(inputValue);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        dispatch,
        selectedTask,
        stateFilter,
        searchQuery,
        inputValue,
        onStateFilter,
        onSelectedTask,
        onSearchQuery,
        onInputValue,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
