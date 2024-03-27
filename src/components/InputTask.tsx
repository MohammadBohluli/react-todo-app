import { FormEvent, useState } from 'react';
import { Task } from '../App';

interface Props {
  onAddTask: (task: Task[]) => void;
}

const InputTask = ({ onAddTask }: Props) => {
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!taskInput) return;

    const newTask: Task = {
      id: Math.floor(Math.random() * 10000),
      task: taskInput,
      complate: false,
    };

    onAddTask([newTask]);
    setTaskInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={taskInput}
        type="text"
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputTask;
