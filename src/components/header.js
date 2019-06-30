import { Link } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';

const Header = ({ siteTitle, fadeTime, position }) => {
  return (
    <Fade top duration={fadeTime} delay={fadeTime}>
      <header
        className="font-sans overflow-hidden top-0 left-0 right-0 z-50"
        style={{
          position,
        }}
      >
        <div className="container m-auto flex justify-between items-center text-maeve-blue">
          <h1 className="text-xl font-light my-3">
            <Link to="/">{siteTitle}</Link>
          </h1>

          <nav>
            <ul className="flex list-none font-light">
              <li className="m-0 ml-4">
                <Link
                  className="p-2 w-8 py-3"
                  activeClassName="font-semibold text-pink-600"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="m-0 ml-4">
                <Link
                  className="p-2 w-8 py-3"
                  activeClassName="font-semibold text-pink-600"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="m-0 ml-4">
                <Link
                  className="p-2 w-8 py-3"
                  activeClassName="font-semibold text-pink-600"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="m-0 ml-4">
                <Link
                  className="p-2 w-8 py-3"
                  activeClassName="font-semibold text-pink-600"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

export default Header;
