import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const blogListQuery = graphql`
  query ArchiveList {
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

const Archive = () => {
  const data = useStaticQuery(blogListQuery);
  const { edges: posts, totalCount } = data.allMarkdownRemark;
  return (
    <aside>
      <div className="flex">
        <h3>Posts</h3>
        <span>{totalCount}</span>
      </div>
      <ul>
        {posts.map(({ node }) => (
          <li>
            <div>{node.frontmatter.title}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Archive;
