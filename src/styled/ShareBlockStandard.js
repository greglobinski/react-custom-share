import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import ShareBlock from '../ShareBlock';

const ShareBlockStandard = props => {
  return (
    <ShareBlock
      className={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      `}
      {...props}
    />
  );
};

ShareBlockStandard.propTypes = {
  url: PropTypes.string.isRequired,
  button: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired,
  text: PropTypes.string,
};

export default ShareBlockStandard;
