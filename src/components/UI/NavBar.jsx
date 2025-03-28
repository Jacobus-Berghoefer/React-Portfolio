import { NavLink } from "react-router-dom";

export default function NavBar({ links }) {
    return (
        <nav className="text-white py-4">
          {/* <div className="container mx-auto flex justify-between items-center px-6"> */}
          <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between px-6 w-full">
            {/* Logo / Branding */}
            <h1 className="text-2xl font-bold text-center w-full md:w-auto md:text-left mb-4 md:mb-0">
              <NavLink to="/" className="hover:text-gray-400">
                Jacobus Berghoefer
              </NavLink>
            </h1>
    
            {/* Navigation Links */}
            <ul className="flex flex-col items-center w-full md:w-auto md:flex-row md:space-x-6 space-y-2 md:space-y-0">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-bold" : "hover:text-gray-400"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      );
    }
  