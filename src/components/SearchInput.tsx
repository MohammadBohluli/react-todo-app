import { CiSearch } from 'react-icons/ci';
interface Props {
  searchQuery: string;
  onSearchQuery: (searchParam: string) => void;
}

const SearchInput = ({ searchQuery, onSearchQuery }: Props) => {
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
