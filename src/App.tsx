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

  return (
    <div className="bg-slate-200 max-w-3xl w-11/12 mt-8 mx-auto">
      <h1 className="text-center font-bold text-xl">
        Personal Todo Application
      </h1>

      <InputTask
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <InputGroups
        taskList={taskList}
        onSearchList={(searchList) => setFilterSearchList(searchList)}
      />

      <TaskList
        taskList={filterSearchList ?? taskList}
        onDeleteTask={(taskId) =>
          setTaskList(taskList.filter((task) => task.id !== taskId))
        }
        onSelectedTask={handleSelectedTask}
      />
    </div>
  );
};

export default App;
