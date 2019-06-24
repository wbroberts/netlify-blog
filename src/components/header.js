import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="bg-pink-500 py-4 font-sans">
    <div className="container m-auto flex justify-between items-center text-white">
      <h1 className="text-xl font-light">
        <Link to="/">{siteTitle}</Link>
      </h1>

      <nav>
        <ul className="flex list-none">
          <li className="m-0 ml-4">
            <Link
              className="p-2 w-8"
              activeClassName="font-semibold text-pink-900"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="m-0 ml-4">
            <Link
              className="p-2 w-8"
              activeClassName="font-semibold text-pink-900"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="m-0 ml-4">
            <Link
              className="p-2 w-8"
              activeClassName="font-semibold text-pink-900"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="m-0 ml-4">
            <Link
              className="p-2 w-8"
              activeClassName="font-semibold text-pink-900"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
