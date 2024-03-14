import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <div className="container mx-auto px-20">
      <Header />
      <Outlet />
    </div>
  );
};
export default Root;
