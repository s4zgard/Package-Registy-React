import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";
import SearchItem from "./SearchItem";

const SearchPage = () => {
  const data = useLoaderData() as SearchLoaderResult;

  const renderedPackages = data.packages.map((pkg) => (
    <SearchItem key={pkg.name} pkg={pkg} />
  ));

  return (
    <div>
      <h1 className="my-4 text-2xl font-bold">
        Found Packages : {data.packages.length}
      </h1>
      <div className="space-y-4 mt-4">{renderedPackages}</div>
    </div>
  );
};
export default SearchPage;
