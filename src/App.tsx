import { FormEvent, useState } from "react";
import TaskList from "./components/TaskList";
import InputTask from "./components/InputTask";

import InputGroups from "./components/InputGroups";

const data = [
  { id: 1, task: "make a cup of coffee or tea", complate: true },
  { id: 2, task: "check calender today", complate: false },
  { id: 3, task: "respond to important email", complate: true },
  { id: 4, task: "start with the most important task first", complate: false },
  { id: 5, task: "this is task 5", complate: true },
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
        taskList={taskList}
        onSearchList={(searchList) => setFilterSearchList(searchList)}
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
      />
    </div>
  );
};

export default App;
