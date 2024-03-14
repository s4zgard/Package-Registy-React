import { Link } from "react-router-dom";
import type { PackageSummary } from "../../api/types/packageSummary";

const SearchItem = ({ pkg }: { pkg: PackageSummary }) => {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div className="flex flex-col gap-2 items-start">
        <Link to={`/packages/${pkg.name}`} className="text-xl font-bold">
          {pkg.name}
        </Link>
        <p className="text-sm text-gray-500">{pkg.description}</p>
        <div className="flex flex-row flex-wrap gap-2 items-center justify-start">
          {pkg.keywords?.map((keyword, i) => (
            <div
              key={i}
              className="border px-1 py-0.5 text-xs bg-slate-200 rounded text-slate-500"
            >
              {keyword}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link
          to={`/packages/${pkg.name}`}
          className="px-2 py-1 bg-teal-500 text-white rounded-md"
        >
          View
        </Link>
      </div>
    </div>
  );
};
export default SearchItem;
