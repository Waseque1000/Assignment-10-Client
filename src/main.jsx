import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
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
// import MyAddedVisas from "./Components/Visa/MyAddedVisa/MyAddedVisas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "register",
        element: <Registar />,
      },
      {
        path: "/visadetails/:id",
        element: <VisaDetails />,
        loader: () => fetch("http://localhost:5000/addvisa"),
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
        path: "/allvisa",
        element: (
          <PrivateRouts>
            <AllVisas />
          </PrivateRouts>
        ),
        loader: () => fetch("http://localhost:5000/addvisa"),
      },
      {
        path: "/myvisaapplication",
        element: (
          <PrivateRouts>
            <MyVisaApplications />
          </PrivateRouts>
        ),
      },

      {
        path: "/myaddedvisa",
        element: (
          <PrivateRouts>
            <MyAddedVisas />
          </PrivateRouts>
        ),
        loader: () => fetch("http://localhost:5000/addvisa"),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
