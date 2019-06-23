import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import '../css/styles.css';

const Layout = ({ children }) => {
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
      <div className="container m-auto font-sans py-8">
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
