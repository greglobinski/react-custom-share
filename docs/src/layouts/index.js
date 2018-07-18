import PropTypes from "prop-types";
import React from "react";

import Footer from "../components/Footer/";
import Header from "../components/Header";
import "prismjs/themes/prism-okaidia.css";

import themeObjectFromYaml from "../theme/theme.yaml";

export const ThemeContext = React.createContext(null);
export const ScreenWidthContext = React.createContext(0);
export const FontLoadedContext = React.createContext(false);

class Layout extends React.Component {
  state = {
    theme: themeObjectFromYaml
  };

  render() {
    const { children, data } = this.props;
    const {
      pages: { edges: pages }
    } = data;

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <FontLoadedContext.Provider value={this.state.font400loaded}>
          <ScreenWidthContext.Provider value={this.state.screenWidth}>
            <React.Fragment>
              <Header path={this.props.location.pathname} pages={pages} theme={this.state.theme} />
              <main>{children()}</main>
              <Footer theme={this.state.theme} />

              {/* --- STYLES --- */}
              <style jsx>{`
                main {
                  min-height: 80vh;
                }
              `}</style>
              <style jsx global>{`
                html {
                  box-sizing: border-box;
                }
                *,
                *:after,
                *:before {
                  box-sizing: inherit;
                  margin: 0;
                  padding: 0;
                }
                body {
                  font-family: "Open Sans", sans-serif;
                }
                h1,
                h2,
                h3 {
                  font-weight: 600;
                  line-height: 1.1;
                  letter-spacing: -0.03em;
                  margin: 0;
                }
                h1 {
                  letter-spacing: -0.04em;
                }
                p {
                  margin: 0;
                }
                strong {
                  font-weight: 600;
                }
                a {
                  text-decoration: none;
                  color: #666;
                }
                main {
                  width: auto;
                  display: block;
                }
              `}</style>
            </React.Fragment>
          </ScreenWidthContext.Provider>
        </FontLoadedContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: { id: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
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
          }
        }
      }
    }
  }
`;
