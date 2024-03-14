import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DetailsPages from "./pages/details/DetailsPage";
import SearchPage from "./pages/search/SearchPage";
import Root from "./pages/Root";
import { searchLoader } from "./pages/search/searchLoader";
import { detailsLoader } from "./pages/details/detailsLoader";
import { homeLoader } from "./pages/home/homeLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPages />,
        loader: detailsLoader,
      },
      {
        path: "*",
        element: (
          <h1 className="text-4xl text-yellow-500 drop-shadow-md">
            404 - Not Found
          </h1>
        ),
      },
    ],
  },
]);

const RegRouter = () => {
  return <RouterProvider router={router} />;
};
export default RegRouter;
