import AllCompleteButton from './AllCompleteButton';
import SearchInput from './SearchInput';
import StatusSelection from './StatusSelection';

interface Props {
  onAllCompleteTask: () => void;
  searchQuery: string;
  onSearchQuery: (searchParam: string) => void;

  onSelectStatus: (status: boolean) => void;
}

const InputGroups = ({
  onAllCompleteTask,
  searchQuery,
  onSearchQuery,

  onSelectStatus,
}: Props) => {
  return (
    <div className="flex justify-between flex-wrap sm:flex-nowrap grow gap-3 mb-14">
      <SearchInput searchQuery={searchQuery} onSearchQuery={onSearchQuery} />
      <div className="flex justify-between text-nowrap w-full sm:justify-end sm:gap-4">
        <StatusSelection onSelectStatus={onSelectStatus} />
        <AllCompleteButton onAllComplateTask={onAllCompleteTask} />
      </div>
    </div>
  );
};

export default InputGroups;
