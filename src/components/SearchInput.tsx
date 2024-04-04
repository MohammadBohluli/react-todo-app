import { FormEvent, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { Task } from "../App";
interface Props {
  taskList: Task[];
  onSearchList: (taskList: Task[]) => void;
}

const SearchInput = ({ taskList, onSearchList }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery) onSearchList(taskList);

    const filterList = taskList.filter((taskItem) =>
      taskItem.task.toLowerCase().includes(searchQuery.toLowerCase())
    );

    onSearchList(filterList);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between gap-4 w-full">
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="input"
      />
      <button className="bg-sky-400 py-1 px-2 rounded hover:bg-sky-500">
        <VscSearch color="white" size={25} />
      </button>
    </form>
  );
};

export default SearchInput;
