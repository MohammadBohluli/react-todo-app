import { Task } from "../App";
import SearchInput from "./SearchInput";
import StatusSelection from "./StatusSelection";

interface Props {
  taskList: Task[];
  onSearchList: (taskList: Task[]) => void;
  selectedStatus: string;
  onSelectStatus: (status: string) => void;
}

const InputGroups = ({
  taskList,
  onSearchList,
  selectedStatus,
  onSelectStatus,
}: Props) => {
  return (
    <div className="flex justify-between flex-wrap grow gap-3">
      <SearchInput taskList={taskList} onSearchList={onSearchList} />
      <StatusSelection
        selectedStatus={selectedStatus}
        onSelectStatus={onSelectStatus}
      />
    </div>
  );
};

export default InputGroups;
