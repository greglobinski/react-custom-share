import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

class Header extends React.Component {
  state = {
    fixed: false
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>
            <Link to="/">react-custom-share</Link>
          </h1>
          <p>
            <a href="https://github.com/greglobinski/react-custom-share">github</a>
            <a href="https://www.npmjs.com/package/react-custom-share">npm</a>
          </p>
        </header>

        {/* --- STYLES --- */}
        <style jsx>{`
          header {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 2em 0 1em;
            position: relative;
            top: 0;
            width: 100%;
          }

          h1 {
            font-size: 25px;
          }

          p {
            padding: 1em 0 0;
            :global(a) {
              margin: 0 1em;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
