import { Task } from "../App";
import AllCompleteButton from "./AllCompleteButton";
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
    <div className="flex justify-between flex-wrap grow gap-3 mb-14">
      <SearchInput taskList={taskList} onSearchList={onSearchList} />
      <div className="flex justify-between text-nowrap w-full">
        <StatusSelection
          selectedStatus={selectedStatus}
          onSelectStatus={onSelectStatus}
        />
        <AllCompleteButton />
      </div>
    </div>
  );
};

export default InputGroups;
