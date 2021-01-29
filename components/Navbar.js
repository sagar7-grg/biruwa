import React, { useState } from "react";
export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container mx-auto py-5 flex justify-between items-center fixed top-0">
      <div className="text-4xl font-medium text-gray-100">LOGO</div>
      <div className="hidden lg:block">
        <ul className="text-xl text-gray-100 flex space-x-5 justify-center items-center ">
          <li className="hover:text-primary cursor-pointer">Home</li>
          <li className="hover:text-primary cursor-pointer ">About</li>
          <li className="hover:text-primary cursor-pointer">Menu</li>
          <li className="hover:text-primary cursor-pointer">Services</li>
          <li className="hover:text-primary cursor-pointer">Team</li>
          <li className="hover:text-primary cursor-pointer">Gallery</li>
          <li className="hover:text-primary cursor-pointer">Contact Us</li>
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
          <li className="hover:text-primary cursor-pointer">Home</li>
          <li className="hover:text-primary cursor-pointer ">About</li>
          <li className="hover:text-primary cursor-pointer">Menu</li>
          <li className="hover:text-primary cursor-pointer">Services</li>
          <li className="hover:text-primary cursor-pointer">Team</li>
          <li className="hover:text-primary cursor-pointer">Gallery</li>
          <li className="hover:text-primary cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
