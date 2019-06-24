import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

export const AboutTemplate = ({ title, html }) => (
  <div>
    <h1 className="mb-6 text-3xl font-bold">{title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  </div>
);

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title}></SEO>
      <AboutTemplate title={frontmatter.title} html={html}></AboutTemplate>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { slug: { eq: "about" } }) {
      html
      frontmatter {
        title
        slug
        type
      }
    }
  }
`;
