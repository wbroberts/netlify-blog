import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogList from '../components/blog-list';
import Archive from '../components/archive';

export const BlogTemplate = ({ title, html }) => (
  <div className="container m-auto">
    <h1 className="mb-6 text-3xl font-bold">{title}</h1>
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
      <div className="flex">
        <div>
          <BlogTemplate title={frontmatter.title} html={html}></BlogTemplate>
          <BlogList></BlogList>
        </div>
        <Archive></Archive>
      </div>
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
