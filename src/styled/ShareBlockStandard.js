import { css, cx } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import ShareBlock from '../ShareBlock';

const styles = css`
  display: flex;
  flex-direction: column;

  & .rcs-header {
    font-family: '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
    line-height: 1;
    margin: 0 0 0.5em 0;
    text-align: center;
  }

  & .rcs-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

const ShareBlockStandard = props => {
  const { header = '', className = '' } = props;

  return (
    <div className={cx(styles, className)}>
      {header && <p className="rcs-header">{header}</p>}
      <ShareBlock {...props} />
    </div>
  );
};

ShareBlockStandard.propTypes = {
  header: PropTypes.string,
  className: PropTypes.any,
};

export default ShareBlockStandard;
