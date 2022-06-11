import { SortDropdownSelect } from "../../common/DropdownSelect";

function Search({ searchValue, onSearchChange }) {
  return (
    <div className="search">
      <i
        className="material-icons grey-text text-darken-4"
        style={{ marginRight: 5, marginLeft: 10 }}
      >
        search
      </i>
      <input
        className="search-input"
        value={searchValue}
        onChange={onSearchChange}
        type="search"
      />
    </div>
  );
}

export default function ListPanel({
  searchValue,
  onSearchChange,
  onSortChange,
  sort,
  onShuffleClick,
}) {
  return (
    <div className="list-panel">
      <Search onSearchChange={onSearchChange} searchValue={searchValue} />
      <SortDropdownSelect onChange={onSortChange} />
    </div>
  );
}
