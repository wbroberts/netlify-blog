import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import '../css/styles.css';

const Layout = ({ children, hero }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  const { title, author } = data.site.siteMetadata;

  return (
    <>
      <Header siteTitle={title} />
      <div className="font-sans text-gray-800">
        {hero ? (
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('images/gatsby-astronaut.png')`,
              backgroundPosition: 'fixed',
              backgroundSize: 'cover',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
              height: '100vh',
              position: 'fixed',
              zIndex: '-1',
            }}
          ></div>
        ) : null}
        <main>{children}</main>
      </div>
      <Footer author={author}></Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
