import { useState } from "react";
import { navLinks } from "../../constants";

export function Headers() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(true);
  // };
  return (
    <nav className="h-[80px] bg-secondaryDark fixed w-full top-0 left-0 z-10 font-sans">
      <div className="container mx-auto flex items-center justify-between h-full text-secondaryLight">
        <div className="flex items-center">
          <span className="text-white text-2xl uppercase font-bold font-sans tracking-wider">
            A n i s h a
          </span>
        </div>
        <ul className="flex flex-wrap gap-4 ">
          {navLinks.map((nav) => (
            <li
              key={nav.label}
              className="text-white text-base font-sm font-sans hover:text-primaryBlue hover:transition-transform hover:duration-200 hover:ease-in-out transform hover:scale-90"
            >
              <a href={nav.href}>{nav.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Headers