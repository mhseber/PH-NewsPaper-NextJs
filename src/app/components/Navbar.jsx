import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-lg">
        <Link href="/">Home</Link>
      </li>
      <li className="text-lg">
        <Link href="/news">News</Link>
      </li>
      <li className="text-lg">
        <Link href="/saradesh">Sara Desh</Link>
      </li>
      <li className="text-lg">
        <Link href="/politics">Politics</Link>
      </li>
      <li className="text-lg">
        <Link href="/sports">Sports</Link>
      </li>
      <li className="text-lg">
        <Link href="/business">Business</Link>
      </li>
      <li className="text-lg">
        <Link href="/technology">Technology</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#1E293B] shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-red-500 hover:bg-red-600 text-white  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <h1 className="font-extrabold text-2xl pl-10">PH Newspaper</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
