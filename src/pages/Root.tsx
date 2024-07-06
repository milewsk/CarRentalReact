import { Outlet } from "react-router";
import Navigation from "../components/navigation/Navigation";

const Root = (): JSX.Element => {
  return (
    <>
      <Navigation></Navigation>
      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
