const path = require('path');
const { createSlug } = require('./src/utils/helpers');

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
                title
                featuredimage
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
              image: `/${node.frontmatter.featuredimage}/`,
            },
          });
        }
      });

      resolve();
    });
  });
};
