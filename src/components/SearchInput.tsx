import { CiSearch } from 'react-icons/ci';
interface Props {
  searchQuery: string;
  onSearchQuery: (searchParam: string) => void;
}

const SearchInput = ({ searchQuery, onSearchQuery }: Props) => {
  return (
    <div className="flex justify-center items-center relative">
      <span className="bg-white absolute right-0 text-gray-400">
        <CiSearch size={30} />
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
