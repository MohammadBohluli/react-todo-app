import { FormEvent, useState } from 'react';
import TaskList from './components/TaskList';
import InputTask from './components/InputTask';

import InputGroups from './components/InputGroups';
import TaskStats from './components/TaskStats';

const data = [
  { id: 1, task: 'درست کردن قهوه', complate: true },
  { id: 2, task: 'انجام تکالیف', complate: false },
  { id: 3, task: 'ارسال ایمیل', complate: true },
  { id: 4, task: 'انجام تسک های شرکت', complate: false },
  { id: 5, task: 'خرید وسایل مورد نیاز', complate: true },
];

export interface Task {
  id: number;
  task: string;
  complate: boolean;
}

const App = () => {
  const [taskList, setTaskList] = useState<Task[]>(data);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [filterSearchList, setFilterSearchList] = useState<Task[] | null>(null);
  const [value, setValue] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onToggleComplete = (id: number) => {
    setTaskList(
      taskList.map((taskItem) =>
        taskItem.id === id
          ? { ...taskItem, complate: !taskItem.complate }
          : taskItem
      )
    );
  };

  const handleSelectedTask = (taskItem: Task) => {
    setSelectedTask(taskItem);
    setValue(taskItem.task);
  };

  const addTask = () => {
    const newTask: Task = {
      id: Math.floor(Math.random() * 10000),
      task: value,
      complate: false,
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

  const handleChange = (input: string) => {
    setValue(input);
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
    setFilterSearchList(null);
  };

  const handleSelectStatus = (status: string) => {
    setSelectedStatus(status);
  };

  const handleDeleteTask = (taskId: number) => {
    const deleteConfirm = confirm('آیا از حذف مطمعن هستید ؟');
    deleteConfirm
      ? setTaskList(taskList.filter((taskItem) => taskItem.id !== taskId))
      : null;
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
      <h1 className="text-center text-2xl">مدیریت کارها</h1>

      <InputTask
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {taskList.length !== 0 ? (
        <div>
          <InputGroups
            onAllCompleteTask={handleAllCompleteTask}
            searchQuery={searchQuery}
            onSearchQuery={(searchParam) => setSearchQuery(searchParam)}
            selectedStatus={selectedStatus}
            onSelectStatus={handleSelectStatus}
          />

          <TaskList
            taskList={filterSearchList ?? taskList}
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
