import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b px-4 border-b h-14">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-lg font-bold">
          NPM Registry
        </Link>
      </div>
      <div className="w-full max-w-xl ml-4">
        <SearchBar />
      </div>
    </div>
  );
};
export default Header;
