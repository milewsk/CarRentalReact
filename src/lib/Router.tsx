import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Reservations from "../pages/Reservations";
import ReservationDetails from "../pages/ReservationDetails";
import Assets from "../pages/Assets";
import Models from "../pages/Models";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "reservations",
        element: <Reservations />,
      },
      {
        path: "reservation/:reservationId",
        element: <ReservationDetails />,
      },
      {
        path: "assets",
        element: <Assets />,
      },
      {
        path: "models",
        element: <Models />,
      },
    ],
  },
]);

export default router;
