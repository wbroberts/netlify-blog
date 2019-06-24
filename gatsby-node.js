const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise(resolve => {
    return graphql(`
      query BlogPageCreation {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              frontmatter {
                slug
                template
                type
              }
            }
          }
        }
      }
    `).then(results => {
      const { edges } = results.data.allMarkdownRemark;

      edges.forEach(({ node }) => {
        if (node.frontmatter.type === 'post') {
          createPage({
            path: `/blog/${node.frontmatter.slug}`,
            component: path.resolve(
              `./src/templates/${node.frontmatter.template}.template.js`
            ),
            context: {
              slug: node.frontmatter.slug,
            },
          });
        } else {
          createPage({
            path: `/${node.frontmatter.slug}`,
            component: path.resolve(
              `./src/templates/${node.frontmatter.template}.template.js`
            ),
            context: {
              slug: node.frontmatter.slug,
            },
          });
        }
      });

      resolve();
    });
  });
};
