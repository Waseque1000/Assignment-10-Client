import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main/Main";
import Home from "./Home/Home/Home/Home";
import AuthProviders from "./Components/Provider/Authproviders";
import Registar from "./Components/Register/Regester";
import Login from "./Components/Login/Login";
import AddVisa from "./Components/Visa/Visa/AddVisa";
import PrivateRouts from "./Components/Routes/Private/PrivateRoute";
import AllVisas from "./Components/Visa/AllVisa/Allvisa";
import VisaDetails from "./Components/Visa/VisaDetails/VisaDetails";
import MyVisaApplications from "./Components/Visa/VisaApplication/MyVisaApplications";
import MyAddedVisas from "./Components/Visa/MyAddedVisa/MyAddedVisas";
import Error from "./Components/Error/Error";
// import MyAddedVisas from "./Components/Visa/MyAddedVisa/MyAddedVisas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://newserver-pi.vercel.app/addvisa"
          ),
      },
      {
        path: "register",
        element: <Registar />,
      },
      {
        path: "/allvisa",
        element: <AllVisas />,
        loader: () =>
          fetch(
            "https://newserver-pi.vercel.app/addvisa"
          ),
      },
      {
        path: "/visadetails/:id",

        element: (
          <PrivateRouts>
            <VisaDetails />,
          </PrivateRouts>
        ),
        loader: () =>
          fetch(
            "https://newserver-pi.vercel.app/addvisa"
          ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addvisa",
        element: (
          <PrivateRouts>
            <AddVisa />
          </PrivateRouts>
        ),
      },

      {
        path: "/myvisaapplication",
        element: (
          <PrivateRouts>
            <MyVisaApplications />
          </PrivateRouts>
        ),
        loader: () =>
          fetch(
            "https://newserver-pi.vercel.app/myvisa"
          ),
      },

      {
        path: "/myaddedvisa",
        element: (
          <PrivateRouts>
            <MyAddedVisas />
          </PrivateRouts>
        ),
        loader: () =>
          fetch(
            "https://newserver-pi.vercel.app/addvisa"
          ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
