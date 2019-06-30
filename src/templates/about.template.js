import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';

export const AboutTemplate = ({ title, html, image }) => (
  <div className="py-6">
    <div className="container m-auto">
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
    </div>

    <div className="container m-auto mb-10 flex">
      <div className="flex-1">
        <Img fluid={image} alt="About image" />
      </div>
      <div
        className="flex-1 px-5"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  </div>
);

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { fluid } = data.file.childImageSharp;

  return (
    <Layout>
      <SEO title={frontmatter.title}></SEO>
      <AboutTemplate
        title={frontmatter.title}
        html={html}
        image={fluid}
      ></AboutTemplate>
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
        featuredimage
      }
    }
    file(relativePath: { regex: "/maeve-yoga/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
