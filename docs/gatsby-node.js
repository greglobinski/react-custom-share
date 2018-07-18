//const webpack = require("webpack");
const path = require("path");
const Promise = require("bluebird");

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;
    createNodeField({
      node,
      name: `slug`,
      value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
    });
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : ""
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { id: { regex: "//pages//" } }
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        // Create pages
        const pages = items.filter(item => /pages/.test(item.node.id));
        pages.forEach(({ node }) => {
          const slug = node.fields.slug;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug
            }
          });
        });
      })
    );
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-javascript":
      {
        config.loader("yaml-loader", {
          test: /\.yaml$/,
          include: path.resolve("data"),
          loader: "yaml"
        });
      }
      break;
  }

  return config;
};

exports.modifyBabelrc = ({ babelrc }) => {
  return {
    ...babelrc,
    plugins: babelrc.plugins.concat([
      [
        "styled-jsx/babel",
        {
          plugins: [
            "styled-jsx-plugin-postcss",
            [
              "styled-jsx-plugin-stylelint",
              {
                stylelint: {
                  rules: {
                    "block-no-empty": true,
                    "color-no-invalid-hex": true,
                    "unit-no-unknown": true,
                    "property-no-unknown": true,
                    "declaration-block-no-shorthand-property-overrides": true,
                    "selector-pseudo-element-no-unknown": true,
                    "selector-type-no-unknown": true,
                    "media-feature-name-no-unknown": true,
                    "no-empty-source": true,
                    "no-extra-semicolons": true,
                    "function-url-no-scheme-relative": true,
                    "declaration-no-important": true,
                    "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global"] }],
                    "shorthand-property-no-redundant-values": true,
                    "no-duplicate-selectors": null,
                    "declaration-block-no-duplicate-properties": null,
                    "no-descending-specificity": null
                  }
                }
              }
            ]
          ]
        }
      ],
      [
        "import",
        {
          libraryName: "antd",
          style: "css"
        }
      ],
      `syntax-dynamic-import`,
      `dynamic-import-webpack`
    ])
  };
};
