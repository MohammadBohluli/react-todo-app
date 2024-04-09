import { FormEvent } from 'react';
import { VscAdd } from 'react-icons/vsc';
import useTask from '../tasks/useTask';
import { Task } from '../App';

const InputTask = () => {
  const { selectedTask, inputValue, onInputValue, onSelectedTask, dispatch } =
    useTask();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;

    if (selectedTask) {
      dispatch({ type: 'UPDATE', task: { ...selectedTask, task: inputValue } });
      onInputValue('');
      onSelectedTask(null);
    } else {
      const newTask: Task = {
        id: Math.floor(Math.random() * 10000),
        task: inputValue,
        complate: false,
        date: new Date().toLocaleDateString('fa-IR'),
        time: new Date().toLocaleTimeString('fa-IR'),
      };

      dispatch({ type: 'ADD', task: newTask });
      onInputValue('');
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex my-9 gap-4">
      <input
        value={inputValue}
        type="text"
        onChange={(e) => onInputValue(e.target.value)}
        className="input"
        placeholder="کارتو وارد کن"
      />
      <button
        type="submit"
        className="bg-sky-400 py-1 px-2 rounded hover:bg-sky-500"
      >
        <VscAdd color="white" size={25} />
      </button>
    </form>
  );
};

export default InputTask;

// const addTask = () => {
//   const newTask: Task = {
//     id: Math.floor(Math.random() * 10000),
//     task: value,
//     complate: false,
//     date: new Date().toLocaleDateString('fa-IR'),
//     time: new Date().toLocaleTimeString('fa-IR'),
//   };

//   setTaskList([...taskList, newTask]);
//   setValue('');
// };

// const updateTask = (selectedTask: Task) => {
//   setTaskList(
//     taskList.map((task) =>
//       task.id === selectedTask.id ? { ...task, task: value } : task
//     )
//   );
//   setValue('');
//   setSelectedTask(null);
// };

// const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   if (!value) return;

//   if (selectedTask) {
//     updateTask(selectedTask);
//   } else {
//     addTask();
//   }

//   setValue('');
// };

// Select task object for updating task
// const handleSelectedTask = (taskItem: Task) => {
//   setSelectedTask(taskItem);
//   setValue(taskItem.task);
// };
