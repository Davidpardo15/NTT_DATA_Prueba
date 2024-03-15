import React from "react";
import { Link} from "react-router-dom";

export default function Navbar({ fixed }) {


  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-green-800 border-slate-400 rounded-md p-4 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span>
            <Link to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Frutas App Prueba
            </Link>
            </span> 
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <span>
                <Link to="/"
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                >
                  Login
                </Link>
            </span> 
              </li>
              <li className="nav-item">
              <span>
                <Link to="/frutas"
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                >
                  Frutas
                </Link>
              </span> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}