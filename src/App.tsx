import { FormEvent, useState } from "react";
import TaskList from "./components/TaskList";
import InputTask from "./components/InputTask";

import InputGroups from "./components/InputGroups";

const data = [
  { id: 1, task: "درست کردن قهوه", complate: true },
  { id: 2, task: "انجام تکالیف", complate: false },
  { id: 3, task: "ارسال ایمیل به دوستم", complate: true },
  { id: 4, task: "انجام تسک های شرکت", complate: false },
  { id: 5, task: "رفتن به پارک", complate: true },
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
  const [value, setValue] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    setValue("");
  };

  const updateTask = (selectedTask: Task) => {
    setTaskList(
      taskList.map((task) =>
        task.id === selectedTask.id ? { ...task, task: value } : task
      )
    );
    setValue("");
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

    setValue("");
    setFilterSearchList(null);
  };

  const handleSelectStatus = (status: string) => {
    setSelectedStatus(status);
  };

  return (
    <div
      className="bg-white max-w-3xl w-11/12 mt-8 mx-auto p-3
                  bg-opacity-[0.33] rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                  backdrop-blur-3xl border-white/[0.2] border-[1px]"
    >
      <h1 className="text-center text-2xl">مدیریت کارها</h1>

      <InputTask
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <InputGroups
        searchQuery={searchQuery}
        onSearchQuery={(searchParam) => setSearchQuery(searchParam)}
        selectedStatus={selectedStatus}
        onSelectStatus={handleSelectStatus}
      />

      <TaskList
        taskList={filterSearchList ?? taskList}
        onDeleteTask={(taskId) =>
          setTaskList(taskList.filter((task) => task.id !== taskId))
        }
        onSelectedTask={handleSelectedTask}
        onToggleComplete={onToggleComplete}
        selectedStatus={selectedStatus}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default App;
