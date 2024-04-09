import { CiSearch } from 'react-icons/ci';
import useTask from '../tasks/useTask';

const SearchInput = () => {
  const { onSearchQuery, searchQuery } = useTask();
  return (
    <div className="flex justify-center items-center w-full relative">
      <span className="bg-white absolute right-1 text-gray-400 border-none">
        <CiSearch size={28} />
      </span>
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => onSearchQuery(e.target.value)}
        className="input pr-8"
        placeholder="جست و جو ..."
      />
    </div>
  );
};

export default SearchInput;
