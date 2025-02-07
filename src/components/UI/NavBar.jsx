import { NavLink } from "react-router-dom";

export default function NavBar({ links }) {
    return (
        <nav className="bg-gray-900 text-white py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-6">
            {/* Logo / Branding */}
            <h1 className="text-2xl font-bold">
              <NavLink to="/" className="hover:text-gray-400">
                Jacobus Berghoefer
              </NavLink>
            </h1>
    
            {/* Navigation Links */}
            <ul className="flex space-x-6">
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
  