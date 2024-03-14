import { useLoaderData } from "react-router-dom";
import type { LoaderDetails } from "./detailsLoader";

const DetailsPages = () => {
  const { details } = useLoaderData() as LoaderDetails;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold my-4">{details.name}</h1>
      <div>
        <h3 className="text-lg font-semibold">Description</h3>
        <div className="bg-gray-200 rounded p-3">{details.description}</div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">License</h3>
        <div className="bg-gray-200 rounded p-3">{details.license}</div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Author</h3>
        <div className="bg-gray-200 rounded p-3">{details.author?.name}</div>
      </div>
    </div>
  );
};
export default DetailsPages;
