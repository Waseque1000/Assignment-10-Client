// import React, { useContext, useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Provider/Authproviders";
// import { FaRegLightbulb } from "react-icons/fa";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     // Check the user's preferred theme on first load
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setIsDarkMode(true);
//     } else {
//       document.documentElement.classList.remove("dark");
//       setIsDarkMode(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     setIsDarkMode((prevState) => {
//       const newTheme = !prevState;
//       // Toggle the theme based on the previous state
//       if (newTheme) {
//         document.documentElement.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//       }
//       return newTheme;
//     });
//   };

//   const handleLogout = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };

//   return (
//     <div className="bg-base-100 shadow-md sticky top-0 z-50 dark:bg-gray-800">
//       <div className="navbar max-w-7xl mx-auto">
//         {/* Navbar Start Section */}
//         <div className="navbar-start">
//           {/* Mobile Menu */}
//           <div className="dropdown lg:hidden">
//             <button
//               tabIndex={0}
//               className="btn btn-ghost lg:hidden"
//               aria-label="Toggle Menu"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </button>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <NavLink className="btn btn-ghost dark:text-white" to="/">
//                 Home
//               </NavLink>
//               <NavLink className="btn btn-ghost dark:text-white" to="/allvisa">
//                 All Visas
//               </NavLink>
//               {user && (
//                 <>
//                   <NavLink
//                     className="btn btn-ghost dark:text-white"
//                     to="/add-visa"
//                   >
//                     Add Visa
//                   </NavLink>
//                   <NavLink
//                     className="btn btn-ghost dark:text-white"
//                     to="/my-added-visas"
//                   >
//                     My Added Visas
//                   </NavLink>
//                   <NavLink
//                     className="btn btn-ghost dark:text-white"
//                     to="/my-visa-applications"
//                   >
//                     My Visa Applications
//                   </NavLink>
//                 </>
//               )}
//             </ul>
//           </div>
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link
//               to="/"
//               className="ml-2 text-2xl font-bold text-blue-600 dark:text-blue-400"
//             >
//               Visa Portal
//             </Link>
//           </div>
//         </div>

//         {/* Navbar Center Section */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-3 py-3">
//             <NavLink className="mr-3 btn btn-ghost dark:text-white" to="/">
//               Home
//             </NavLink>
//             <NavLink
//               className="mr-3 btn btn-ghost dark:text-white"
//               to="/allvisa"
//             >
//               All Visas
//             </NavLink>
//             {user && (
//               <>
//                 <NavLink
//                   className="mr-3 btn btn-ghost dark:text-white"
//                   to="/addvisa"
//                 >
//                   Add Visa
//                 </NavLink>
//                 <NavLink
//                   className="mr-3 btn btn-ghost dark:text-white"
//                   to="/myaddedvisa"
//                 >
//                   My Added Visas
//                 </NavLink>
//                 <NavLink
//                   className="mr-3 btn btn-ghost dark:text-white"
//                   to="/myvisaapplication"
//                 >
//                   My Visa Applications
//                 </NavLink>
//               </>
//             )}
//           </ul>
//         </div>

//         {/* Navbar End Section */}
//         <div className="navbar-end flex items-center space-x-3">
//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className="btn btn-circle btn-ghost"
//             aria-label="Toggle Theme"
//           >
//             {isDarkMode ? (
//               <div className="text-3xl">
//                 <FaRegLightbulb className="text-white "></FaRegLightbulb>
//               </div>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-gray-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 12.79A9 9 0 1111.21 3 7.5 7.5 0 0021 12.79z"
//                 />
//               </svg>
//             )}
//           </button>

//           {user ? (
//             <>
//               <div className="relative">
//                 <img
//                   className="w-10 h-10 rounded-full border-2 border-green-500 cursor-pointer"
//                   src={user?.photoURL}
//                   alt={user?.displayName || "User"}
//                   title={user?.displayName}
//                 />
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="btn bg-blue-400 text-white hover:bg-blue-500"
//               >
//                 Log out
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-primary" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-secondary" to="/register">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/Authproviders";
import { FaRegLightbulb } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the user's preferred theme on first load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      // Default to light theme
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => {
      const newTheme = !prevState;
      // Toggle the theme based on the previous state
      if (newTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newTheme;
    });
  };

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-base-100 shadow-md sticky top-0 z-50 dark:bg-gray-800">
      <div className="navbar max-w-7xl mx-auto">
        {/* Navbar Start Section */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink className="btn btn-ghost dark:text-white" to="/">
                Home
              </NavLink>
              <NavLink className="btn btn-ghost dark:text-white" to="/allvisa">
                All Visas
              </NavLink>
              {user && (
                <>
                  <NavLink
                    className="btn btn-ghost dark:text-white"
                    to="/add-visa"
                  >
                    Add Visa
                  </NavLink>
                  <NavLink
                    className="btn btn-ghost dark:text-white"
                    to="/my-added-visas"
                  >
                    My Added Visas
                  </NavLink>
                  <NavLink
                    className="btn btn-ghost dark:text-white"
                    to="/my-visa-applications"
                  >
                    My Visa Applications
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="ml-2 text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              Visa Portal
            </Link>
          </div>
        </div>

        {/* Navbar Center Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3 py-3">
            <NavLink className="mr-3 btn btn-ghost dark:text-white" to="/">
              Home
            </NavLink>
            <NavLink
              className="mr-3 btn btn-ghost dark:text-white"
              to="/allvisa"
            >
              All Visas
            </NavLink>
            {user && (
              <>
                <NavLink
                  className="mr-3 btn btn-ghost dark:text-white"
                  to="/addvisa"
                >
                  Add Visa
                </NavLink>
                <NavLink
                  className="mr-3 btn btn-ghost dark:text-white"
                  to="/myaddedvisa"
                >
                  My Added Visas
                </NavLink>
                <NavLink
                  className="mr-3 btn btn-ghost dark:text-white"
                  to="/myvisaapplication"
                >
                  My Visa Applications
                </NavLink>
              </>
            )}
          </ul>
        </div>

        {/* Navbar End Section */}
        <div className="navbar-end flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-circle btn-ghost"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <div className="text-3xl">
                <FaRegLightbulb className="text-white "></FaRegLightbulb>
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7.5 7.5 0 0021 12.79z"
                />
              </svg>
            )}
          </button>

          {user ? (
            <>
              <div className="relative">
                <img
                  className="w-10 h-10 rounded-full border-2 border-green-500 cursor-pointer"
                  src={user?.photoURL}
                  alt={user?.displayName || "User"}
                  title={user?.displayName}
                />
              </div>
              <button
                onClick={handleLogout}
                className="btn bg-blue-400 text-white hover:bg-blue-500"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
              <Link className="btn btn-secondary" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
