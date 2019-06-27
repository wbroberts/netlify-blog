import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
  // faFacebook,
  // faTwitter,
  fab,
} from '@fortawesome/free-brands-svg-icons';

import Header from './header';
import Footer from './footer';
import '../css/styles.css';

library.add(faInstagram, faYoutube, fab, faFacebook, faTwitter);

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
      <div className="font-sans text-gray-800">
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
