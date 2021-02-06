import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 70) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={navbar ? "nav-active" : "nav-wrapper"}>
      <div className="container mx-auto py-3 flex justify-between items-center">
        <div className="text-4xl font-medium text-gray-100">LOGO</div>
        <div className="hidden lg:block">
          <ul className="text-xl text-gray-100 flex space-x-5 justify-center items-center ">
            <li className="hover:text-primary cursor-pointer" key={1}>
              <Link activeClass="active" to="home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer " key={2}>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>

            <li className="hover:text-primary cursor-pointer" key={4}>
              <Link to="service" spy={true} smooth={true}>
                Service
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer" key={3}>
              <Link to="menu" spy={true} smooth={true}>
                Menu
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer" key={5}>
              <Link to="team" spy={true} smooth={true}>
                Team
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer" key={6}>
              <Link to="gallery" spy={true} smooth={true}>
                Gallery
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer" key={7}>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="w-8 h-8 text-gray-100 block lg:hidden"
          onClick={() => setVisible(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={
            visible
              ? "bg-gray-50 fixed left-0 top-0 w-full h-screen transition-all"
              : "bg-gray-50 fixed -left-full top-0 w-full h-screen"
          }
        >
          <div
            className="text-md absolute right-10 top-4 cursor-pointer w-8 h-8 text-red-500"
            onClick={() => setVisible(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="text-xl text-gray-800 pt-16 flex space-y-5 justify-center items-center flex-col">
            <li className="hover:text-primary cursor-pointer" key={1}>
              <Link activeClass="active" to="home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer " key={2}>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>

            <li className="hover:text-primary cursor-pointer" key={4}>
              <Link to="service" spy={true} smooth={true}>
                Service
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer" key={3}>
              <Link to="menu" spy={true} smooth={true}>
                Menu
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer" key={5}>
              <Link to="team" spy={true} smooth={true}>
                Team
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer" key={6}>
              <Link to="gallery" spy={true} smooth={true}>
                Gallery
              </Link>
            </li>
            <li className="hover:text-primary cursor-pointer" key={7}>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
