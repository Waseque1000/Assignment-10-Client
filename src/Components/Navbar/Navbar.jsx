import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/Authproviders";
// import { AuthContext } from "../../Provider/Authproviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-base-100 shadow-md sticky top-0 z-50">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink className="btn btn-ghost" to="/">
                Home
              </NavLink>
              <NavLink className="btn btn-ghost" to="/learning">
                Start Learning
              </NavLink>

              <NavLink className="mr-3 btn btn-ghost" to="/tutorial">
                Tutorial
              </NavLink>

              <NavLink className="btn btn-ghost" to="/about">
                About Us
              </NavLink>
              {user && (
                <NavLink className="btn btn-ghost" to="/dashboard">
                  Dashboard
                </NavLink>
              )}
            </ul>
          </div>
          {/* Logo */}
          <div className="flex items-center">
            {/* <PiGraduationCapFill className="h-8 w-8 text-blue-600" /> */}
            <Link to="/" className="ml-2 text-2xl font-bold text-blue-600">
              Lingo Bingo
            </Link>
          </div>
        </div>

        {/* Navbar Center Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3 py-3">
            <NavLink className="mr-3 btn btn-ghost" to="/">
              Home
            </NavLink>
            <NavLink className="mr-3 btn btn-ghost" to="/learning">
              Start Learning
            </NavLink>

            <NavLink className="mr-3 btn btn-ghost" to="/about">
              About Us
            </NavLink>

            <NavLink className="mr-3 btn btn-ghost" to="/tutorial">
              Tutorial
            </NavLink>

            {user && (
              <NavLink className="mr-3 btn btn-ghost" to="/dashboard">
                Dashboard
              </NavLink>
            )}
          </ul>
        </div>

        {/* Navbar End Section */}
        <div className="navbar-end flex items-center space-x-3">
          {user ? (
            <>
              <div className="border-4 rounded-full border-green-500">
                <img
                  className="w-10 h-10 p-1 rounded-full  "
                  src={user?.photoURL}
                  alt={user?.displayName || "User"}
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
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
