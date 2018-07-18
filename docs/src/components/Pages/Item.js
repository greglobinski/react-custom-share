import Img from "gatsby-image";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Item = props => {
  const {
    theme,
    page: {
      fields: { slug },
      frontmatter: { title, description, cover }
    }
  } = props;

  const { children: [{ sizes }] = [{}] } = cover || {};

  return (
    <React.Fragment>
      <li>
        <Link to={slug} key={slug} className="link">
          <h1>{title}</h1>
          <p>{description}</p>
          {sizes && <Img sizes={sizes} />}
        </Link>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        :global(.link) {
          width: 100%;
          color: ${theme.text.color.primary};
        }

        :global(.link:hover) {
          color: rgb(22, 5, 85);
        }

        li {
          border: 1px solid transparent;
          border-radius: ${theme.size.radius.default};
          margin: ${theme.space.default} 0;
          padding: ${theme.space.inset.s};
          position: relative;
          transition: all ${theme.time.duration.default};
          background: transparent;

          :global(.gatsby-image-outer-wrapper) {
            border-radius: ${theme.size.radius.default};
            border: 1px solid ${theme.line.color};
            overflow: hidden;
          }
          :global(.gatsby-image-outer-wrapper img) {
            z-index: -1;
          }
        }

        h1 {
          padding: 0 0 0.5em;
          line-height: ${theme.blog.h1.lineHeight};
          font-size: ${theme.blog.h1.size};
          text-remove-gap: both;
        }

        p {
          padding: 0 0 1em;
        }

        @from-width tablet {
          li {
            padding: ${theme.space.default};
          }

          h1 {
            font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
          }
        }
        @from-width desktop {
          li {
            padding: 0 0 ${`calc(${theme.space.default} * 2)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Item.propTypes = {
  page: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Item;
