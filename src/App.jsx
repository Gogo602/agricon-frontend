
import BookingForm from "./pages/infrastructure/BookingFormEdited";
import ComingSoon from "./pages/infrastructure/ComingSoon";
import FacilityDetails from "./pages/infrastructure/FacilityDetails";
import Facility from "./pages/infrastructure/Facility";
import RootLayout from "./pages/infrastructure/Root";
// import SignUp from "./pages/signUp/SignUp";
import BookingSummary from "./pages/infrastructure/BookingSummary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/infrastructure/Error";

const router = createBrowserRouter([
  // { path: "/", element: <SignUp /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Facility /> },
      {
        path: "facility/:facilityId",
        element: <FacilityDetails />,
        errorElement: <ErrorPage />,
      },
      { path: "booking", element: <BookingForm /> },
      { path: "booking-summary", element: <BookingSummary /> },
      { path: ":id", element: <ComingSoon /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
