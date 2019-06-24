import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import BlogList from '../components/blog-list';

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
      <BlogTemplate title={frontmatter.title} html={html}></BlogTemplate>
      <BlogList></BlogList>
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
