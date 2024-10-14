
import Search from '/Dashboard/Search.svg'; 


const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="border rounded-lg py-2 pl-10 pr-4 text-sm w-64"
        placeholder="Search"
      />
      <div className="absolute top-2 left-3">
        <img src={Search} alt="Search Icon" />
      </div>
    </div>
  );
};

// Correct export statement
export default SearchBar;
