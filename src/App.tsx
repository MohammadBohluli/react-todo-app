import { useState } from 'react';
import TaskList from './components/TaskList';

const data = [
  { id: 1, task: 'this is task 1', complate: true },
  { id: 2, task: 'this is task 2', complate: false },
  { id: 3, task: 'this is task 3', complate: true },
  { id: 4, task: 'this is task 4', complate: false },
  { id: 5, task: 'this is task 5', complate: true },
];

export interface Task {
  id: number;
  task: string;
  complate: boolean;
}

const App = () => {
  const [taskList, setTaskList] = useState<Task[]>(data);
  return (
    <div className="bg-slate-200 max-w-3xl w-11/12 mt-8 mx-auto">
      <h1 className="text-center font-bold text-xl">
        Personal Todo Application
      </h1>
      <TaskList
        taskList={taskList}
        onDeleteTask={(taskId) =>
          setTaskList(taskList.filter((task) => task.id !== taskId))
        }
      />
    </div>
  );
};

export default App;
