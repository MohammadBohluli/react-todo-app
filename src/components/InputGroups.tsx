import { Task } from "../App";
import SearchInput from "./SearchInput";

interface Props {
  taskList: Task[];
  onSearchList: (taskList: Task[]) => void;
}

const InputGroups = ({ taskList, onSearchList }: Props) => {
  return (
    <div>
      <SearchInput taskList={taskList} onSearchList={onSearchList} />
    </div>
  );
};

export default InputGroups;
