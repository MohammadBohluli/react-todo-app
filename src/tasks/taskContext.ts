import { Dispatch, createContext } from 'react';
import { Task } from '../App';
import { TaskAction } from './TaskProvider';

interface TaskContextType {
  tasks: Task[];
  selectedTask: Task | null;
  searchQuery: string;
  stateFilter: string;
  inputValue: string;
  dispatch: Dispatch<TaskAction>;
  onSelectedTask: (task: Task | null) => void;
  onStateFilter: (state: string) => void;
  onSearchQuery: (searchParam: string) => void;
  onInputValue: (inputValue: string) => void;
}
const TaskContext = createContext<TaskContextType>({} as TaskContextType);
export default TaskContext;
