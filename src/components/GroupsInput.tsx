import AllCompleteButton from './AllCompleteButton';
import SearchInput from './SearchInput';
import StatusSelection from './StatusSelection';

const InputGroups = () => {
  return (
    <div className="flex justify-between flex-wrap sm:flex-nowrap grow gap-3 mb-14">
      <SearchInput />
      <div className="flex justify-between text-nowrap w-full sm:justify-end sm:gap-4">
        <StatusSelection />
        <AllCompleteButton />
      </div>
    </div>
  );
};

export default InputGroups;
