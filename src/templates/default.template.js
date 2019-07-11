import React from 'react';

import SEO from '../components/seo';
import HeroLayout from '../components/hero-layout';

export const AboutTemplate = ({ subtitle, html }) => (
  <div
    className="container m-auto py-6 bg-white relative z-20 rounded"
    style={{
      top: '-200px',
    }}
  >
    <h1 className="mb-6 text-3xl font-bold">{subtitle}</h1>

    <div className="mb-10 flex">
      <div
        className="flex-1 px-5"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  </div>
);

const DefaultPage = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { fluid } = data.file.childImageSharp;

  return (
    <HeroLayout location={location} image={fluid} title={frontmatter.title}>
      <SEO title={frontmatter.title}></SEO>
      <AboutTemplate html={html} image={fluid}></AboutTemplate>
    </HeroLayout>
  );
};

export default DefaultPage;
