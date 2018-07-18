import PropTypes from "prop-types";
import React from "react";

import Item from "./Item";

const Blog = props => {
  const { pages, theme } = props;

  return (
    <React.Fragment>
      <main className="main">
        <ul>
          {pages.map(page => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = page;
            return <Item key={slug} page={node} theme={theme} />;
          })}
        </ul>
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 0 ${theme.space.inset.default};
        }

        ul {
          list-style: none;
          margin: 0 auto;
          padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};
        }

        @above tablet {
          .main {
            padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
          }
          ul {
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @above desktop {
          ul {
            max-width: ${theme.text.maxWidth.desktop};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  pages: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Blog;
