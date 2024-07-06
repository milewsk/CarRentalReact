import { Outlet } from "react-router";
import Navigation from "../components/navigation/Navigation";

const Home = (): JSX.Element => {
  return (
    <>
      <Navigation></Navigation>
      <div className="body">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;
