import { FormEvent, useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import GroupsInput from './components/GroupsInput';
import TaskStats from './components/TaskStats';
import data from './data';

export interface Task {
  id: number;
  task: string;
  complate: boolean;
  date: string;
  time: string;
}

const App = () => {
  const [taskList, setTaskList] = useState<Task[]>(data);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [value, setValue] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const addTask = () => {
    const newTask: Task = {
      id: Math.floor(Math.random() * 10000),
      task: value,
      complate: false,
      date: new Date().toLocaleDateString('fa-IR'),
      time: new Date().toLocaleTimeString('fa-IR'),
    };

    setTaskList([...taskList, newTask]);
    setValue('');
  };

  const updateTask = (selectedTask: Task) => {
    setTaskList(
      taskList.map((task) =>
        task.id === selectedTask.id ? { ...task, task: value } : task
      )
    );
    setValue('');
    setSelectedTask(null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    if (selectedTask) {
      updateTask(selectedTask);
    } else {
      addTask();
    }

    setValue('');
  };

  // Select task object for updating task
  const handleSelectedTask = (taskItem: Task) => {
    setSelectedTask(taskItem);
    setValue(taskItem.task);
  };

  const handleDeleteTask = (taskId: number) => {
    const deleteConfirm = confirm('آیا از حذف مطمعن هستید ؟');
    deleteConfirm
      ? setTaskList(taskList.filter((taskItem) => taskItem.id !== taskId))
      : null;
  };

  const onToggleComplete = (id: number) => {
    setTaskList(
      taskList.map((taskItem) =>
        taskItem.id === id
          ? { ...taskItem, complate: !taskItem.complate }
          : taskItem
      )
    );
  };

  const handleAllCompleteTask = () => {
    setTaskList(
      taskList.map((taskItem) =>
        !taskItem.complate ? { ...taskItem, complate: true } : taskItem
      )
    );
  };

  return (
    <div className="glass-morphism max-w-3xl w-11/12 my-8 mx-auto p-3 bg-opacity-20">
      <h1 className="text-center text-white text-5xl">مدیریت کارها</h1>

      <TaskInput
        value={value}
        onChange={(input) => setValue(input)}
        onSubmit={handleSubmit}
      />

      {taskList.length !== 0 ? (
        <div>
          <GroupsInput
            onAllCompleteTask={handleAllCompleteTask}
            searchQuery={searchQuery}
            onSearchQuery={(searchParam) => setSearchQuery(searchParam)}
            onSelectStatus={(status: boolean) => setSelectedStatus(status)}
          />

          <TaskList
            taskList={taskList}
            onDeleteTask={handleDeleteTask}
            onSelectedTask={handleSelectedTask}
            onToggleComplete={onToggleComplete}
            selectedStatus={selectedStatus}
            searchQuery={searchQuery}
          />

          <TaskStats taskList={taskList} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
