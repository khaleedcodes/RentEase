import Signup from "./pages/signup-page/SignupPage";
import Login from "./pages/login-page/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import ListingsPage from "./pages/listings-page/ListingsPage";
import CreateListingPage from "./pages/seller-page/CreateListingPage";
import SellerPage from "./pages/seller-page/SellerPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import PageLayout from "./pages/PageLayout";
import ListingDetails from "./pages/listings-page/ListingDetails";
import InterestPage from "./pages/interests-page/InterestPage";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <LandingPage />
      </PageLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/listings",
    element: (
      <PageLayout>
        <ListingsPage />
      </PageLayout>
    ),
  },
  {
    path: "/createlisting",
    element: (
      <PageLayout>
        <CreateListingPage />
      </PageLayout>
    ),
  },
  {
    path: "/sellerpage",
    element: (
      <PageLayout>
        <SellerPage />
      </PageLayout>
    ),
  },
  {
    path: "/listingdetails/:id",
    element: (
      <PageLayout>
        <ListingDetails />
      </PageLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <PageLayout>
        <Signup />
      </PageLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <PageLayout>
        <Login />
      </PageLayout>
    ),
  },
  {
    path: "/interests",
    element: (
      <PageLayout>
        <InterestPage />
      </PageLayout>
    ),
  },
]);
function App() {
  return (
    <div className="flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
