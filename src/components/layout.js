import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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
      imageSharp(fluid: { originalName: { eq: "hero-home.png" } }) {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);

  const { title, author } = data.site.siteMetadata;
  const { fluid } = data.imageSharp;
  console.log(fluid);
  return (
    <>
      <Header siteTitle={title} />
      <div className="font-sans text-gray-800">
        {hero ? (
          <Img
            fluid={fluid}
            alt="Maeve wall"
            // style={{
            //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${fluid})`,
            //   backgroundPosition: 'fixed',
            //   backgroundSize: 'cover',
            //   top: '0',
            //   left: '0',
            //   bottom: '0',
            //   right: '0',
            //   height: '100vh',
            //   position: 'fixed',
            //   zIndex: '-1',
            // }}
          ></Img>
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
