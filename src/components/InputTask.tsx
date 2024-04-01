import { FormEvent } from "react";

interface Props {
  value: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (input: string) => void;
}

const InputTask = ({ value, onSubmit, onChange }: Props) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        value={value}
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputTask;
