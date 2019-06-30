import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default class PostTemplate extends Component {
  render() {
    const { markdownRemark } = this.props.data;

    return (
      <Layout location={this.props.location}>
        <div className="container m-auto">
          <div className="flex flex-col my-6">
            <h1 className="text-3xl font-bold">
              {markdownRemark.frontmatter.title}
            </h1>
            <p className="text-base italic">
              {markdownRemark.frontmatter.date}
            </p>
          </div>

          <div
            className="mb-8 text-lg"
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        type
        date
      }
    }
  }
`;
