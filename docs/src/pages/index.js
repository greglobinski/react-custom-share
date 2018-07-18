import PropTypes from "prop-types";
import React from "react";

import { ThemeContext } from "../layouts";
import Pages from "../components/Pages";
import Seo from "../components/Seo";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        pages: { edges: pages = [] }
      }
    } = this.props;

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => <Pages pages={pages} theme={theme} />}
        </ThemeContext.Consumer>

        <Seo />
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query IndexQuery {
    pages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            description
            cover {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 800, maxHeight: 300, quality: 95) {
                    ...GatsbyImageSharpSizes_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
