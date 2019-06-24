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
            date(fromNow: true)
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
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <>
      <aside className="container m-auto">
        <div className="flex items-center mb-6">
          <h2 className="font-semibold text-xl mr-6">Archive</h2>
          <span>{totalCount} Posts</span>
        </div>

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
      </aside>
    </>
  );
};

export default BlogList;
