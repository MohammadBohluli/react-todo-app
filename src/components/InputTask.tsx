import { FormEvent } from 'react';
import { VscAdd } from 'react-icons/vsc';

interface Props {
  value: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (input: string) => void;
}

const InputTask = ({ value, onSubmit, onChange }: Props) => {
  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex my-9 gap-4">
      <input
        value={value}
        type="text"
        onChange={(e) => onChange(e.target.value)}
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
