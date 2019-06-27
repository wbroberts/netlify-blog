import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="bg-white font-sans">
    <div className="container m-auto flex justify-between items-center text-gray-600">
      <h1 className="text-xl font-light my-3">
        <Link to="/">{siteTitle}</Link>
      </h1>

      <nav>
        <ul className="flex list-none">
          <li className="m-0 ml-4">
            <Link
              className="p-2 w-8 py-3 border-pink-600"
              activeClassName="font-semibold text-pink-600 border-b"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="m-0 ml-4">
            <Link
              className="p-2 w-8 py-3 border-pink-600"
              activeClassName="font-semibold text-pink-600 border-b"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="m-0 ml-4">
            <Link
              className="p-2 w-8 py-3 border-pink-600"
              activeClassName="font-semibold text-pink-600 border-b"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="m-0 ml-4">
            <Link
              className="p-2 w-8 py-3 border-pink-600"
              activeClassName="font-semibold text-pink-600 border-b"
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
