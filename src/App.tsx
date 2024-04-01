import { FormEvent, useState } from "react";
import TaskList from "./components/TaskList";
import InputTask from "./components/InputTask";

const data = [
  { id: 1, task: "this is task 1", complate: true },
  { id: 2, task: "this is task 2", complate: false },
  { id: 3, task: "this is task 3", complate: true },
  { id: 4, task: "this is task 4", complate: false },
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

      <TaskList
        taskList={taskList}
        onDeleteTask={(taskId) =>
          setTaskList(taskList.filter((task) => task.id !== taskId))
        }
        onSelectedTask={handleSelectedTask}
      />
    </div>
  );
};

export default App;
