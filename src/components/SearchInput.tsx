import { FormEvent, useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button>search</button>
    </form>
  );
};

export default SearchInput;
