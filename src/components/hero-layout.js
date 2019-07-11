import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
  fab,
} from '@fortawesome/free-brands-svg-icons';

import Header from './header';
import Footer from './footer';
import '../css/styles.css';
import '../css/keep-styles.css';
import FluidHero from './fluid-hero';

library.add(faInstagram, faYoutube, fab, faFacebook, faTwitter);

const HeroLayout = ({ children, location, image, title }) => {
  const data = useStaticQuery(graphql`
    query HeroSiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  const { title: pageTitle, author } = data.site.siteMetadata;
  const isHome = location.pathname === '/';
  const duration = isHome ? 1000 : 0;
  const position = isHome ? 'absolute' : 'relative';

  return (
    <>
      <Header siteTitle={pageTitle} fadeTime={duration} position={position} />
      <FluidHero image={image} title={title}></FluidHero>
      <div className="font-sans text-gray-800">
        <main>{children}</main>
      </div>
      <Footer author={author}></Footer>
    </>
  );
};

export default HeroLayout;
