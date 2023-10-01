import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../src/Pages/Stylesheet/Slider.css"
import Gymer from './Pages/components/assets/asd.jpg';
const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return ( 
    <>
      <nav
        className="bg-white drop-shadow-2xl"
        
      >
        <div className="">
          <div className=" ">
            {/* <!-- Hamburger menu button --> */}
            <button
              id="hamburgerButton"
              className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
              type="button"
              onClick={toggleMobileMenu}
            >
              {/* <!-- Hamburger menu icon --> */}
              <span className="w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* <!-- Navigation links --> */}
          <div
            className={`${
              isMobileMenuOpen ? "" : "hidden"
            } w-full lg:flex `}
            id="navbarSupportedContentY"
            data-te-collapse-item
          ><img src={Gymer} alt="Gymer-logo" className="h-[8rem] rounded-full "/>
            <ul className=" grid grid-cols-6 gap-6 place-items-center  items-center mx-96 font-semibold text-2xl">
              <li className=" " data-te-nav-item-ref>
                <Link
                  to="/"
                  className="nav-font"
                >
                  Home
                </Link>
              </li>
              <li className=" lg:mb-0 lg:pr-4 nav-font" data-te-nav-item-ref>
                <Link to="Contact">Contact</Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-4 nav-font" data-te-nav-item-ref>
                <Link className="" to="Pricing">
                  Pricing
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-4 nav-font" data-te-nav-item-ref>
                <Link className="" to="About">
                  About
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 nav-font" data-te-nav-item-ref>
                <Link className="" to="About">
                  Facility
                </Link>
              </li>
            <button className="bg-gray-200 ml-[40rem] p-2 px-3 rounded-lg items-center ">Consult</button>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
