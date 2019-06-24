import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const FeaturedList = () => {
  const data = useStaticQuery(graphql`
    query FeaturedPosts {
      allMarkdownRemark(
        filter: { frontmatter: { featuredpost: { eq: true } } }
        limit: 6
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              slug
              description
              featuredimage
              tags
            }
            html
          }
        }
      }
    }
  `);

  const { edges: posts } = data.allMarkdownRemark;

  return (
    <section className="h-full flex flex-no-wrap justify-center items-center justify-around">
      {posts.map(({ node }) => (
        <article className="bg-white p-6 shadow-lg" key={node.frontmatter.slug}>
          <p>{node.frontmatter.title}</p>
          <p>{node.frontmatter.description}</p>
        </article>
      ))}
    </section>
  );
};

export default FeaturedList;
