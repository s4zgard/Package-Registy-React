import { useLoaderData, Link } from "react-router-dom";
import { HomeResults } from "./homeLoader";

const HomePage = () => {
  const { featuredPackages } = useLoaderData() as HomeResults;
  const renderedPackages = featuredPackages.map((p) => {
    return (
      <div
        key={p.name}
        className="flex flex-col gap-3 justify-between border rounded shadow p-4"
      >
        <div className="flex flex-col gap-1 border-gray-500">
          <div className="font-bold text-center">{p.name}</div>
          <div className="text-sm text-gray-500">{p.description}</div>
          <div className="text-xs text-gray-400">
            {p.maintainers.length} Maintainers
          </div>
        </div>
        <Link
          to={`packages/${p.name}`}
          className="px-2 py-1 text-white bg-teal-500 text-center rounded"
        >
          View
        </Link>
      </div>
    );
  });
  return (
    <div className="container mx-auto py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">The NPM Registry</h1>
        <p className="mx-auto max-w-600px text-gray-500">
          The pacakge manager for Javascript. Search and view packages.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
        {renderedPackages}
      </div>
    </div>
  );
};
export default HomePage;
