import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";

const SearchBar = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?term=${term}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <VscSearch className="w-5 h-5 text-gray-500" />
        </div>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Search Packages"
          className="pl-10 py-2 border-0 w-full shadow-none focus:border-teal-500"
        />
      </div>
    </form>
  );
};
export default SearchBar;
