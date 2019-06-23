import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Archive from '../components/archive';

export const BlogTemplate = ({ title, html }) => (
  <div>
    <h1 className="my-6 text-3xl font-bold">{title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  </div>
);

const BlogPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title}></SEO>
      <BlogTemplate title={frontmatter.title} html={html}></BlogTemplate>
      <Archive></Archive>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPage {
    markdownRemark(frontmatter: { slug: { eq: "blog" } }) {
      html
      frontmatter {
        title
        slug
        type
      }
    }
  }
`;
