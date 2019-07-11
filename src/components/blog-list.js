import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PostPreview from './post-preview';

const blogListQuery = graphql`
  query BlogList {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMM DD, YYYY")
          }
          html
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`;

const BlogList = () => {
  const data = useStaticQuery(blogListQuery);
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <section>
        <ul>
          {edges.map(node => {
            const { node: post } = node;
            return (
              <PostPreview
                key={post.frontmatter.slug}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                slug={post.frontmatter.slug}
                excerpt={post.excerpt}
              ></PostPreview>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default BlogList;
