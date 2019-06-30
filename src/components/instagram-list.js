import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const query = graphql`
  query InstaQuery {
    allInstaNode(limit: 5) {
      edges {
        node {
          id
          preview
          likes
          caption
          localFile {
            childImageSharp {
              fixed(height: 200, width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;

const InstagramList = () => {
  const data = useStaticQuery(query);
  const { edges: posts } = data.allInstaNode;

  return (
    <div className="flex flex-no-wrap overflow-y-hidden overflow-x-scroll py-6">
      {posts.map(({ node }, index) => {
        return (
          <div className="mx-4 inline-block" key={index}>
            <Img fixed={node.localFile.childImageSharp.fixed} />
          </div>
        );
      })}
    </div>
  );
};

export default InstagramList;
