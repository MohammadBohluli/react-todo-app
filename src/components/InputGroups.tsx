import AllCompleteButton from "./AllCompleteButton";
import SearchInput from "./SearchInput";
import StatusSelection from "./StatusSelection";

interface Props {
  searchQuery: string;
  onSearchQuery: (searchParam: string) => void;
  selectedStatus: string;
  onSelectStatus: (status: string) => void;
}

const InputGroups = ({
  searchQuery,
  onSearchQuery,
  selectedStatus,
  onSelectStatus,
}: Props) => {
  return (
    <div className="flex justify-between flex-wrap sm:flex-nowrap grow gap-3 mb-14">
      <SearchInput searchQuery={searchQuery} onSearchQuery={onSearchQuery} />
      <div className="flex justify-between text-nowrap w-full sm:justify-end sm:gap-4">
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
