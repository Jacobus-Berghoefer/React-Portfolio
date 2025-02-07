import Navbar from './UI/NavBar';

export default function Nav() {
  return (
<header className="text-white py-4 shadow-md">
<div className="container mx-auto px-4">

<Navbar
  links={[
    { path: "/about", label: "About Me" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
    { path: "/resume", label: "Resume" },
    ]}
    />
    </div>
    </header>
  );
}
