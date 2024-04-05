interface Props {
  searchQuery: string;
  onSearchQuery: (searchParam: string) => void;
}

const SearchInput = ({ searchQuery, onSearchQuery }: Props) => {
  return (
    <input
      type="search"
      value={searchQuery}
      onChange={(e) => onSearchQuery(e.target.value)}
      className="input"
    />
  );
};

export default SearchInput;
