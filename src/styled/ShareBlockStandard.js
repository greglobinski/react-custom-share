import { css } from 'emotion';
import React from 'react';

import ShareBlock from '../ShareBlock';

const styles = css`
  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  & > p {
    font-size: 20px;
    margin: 0 0 0.5em 0;
    text-align: center;
  }
`;

const ShareBlockStandard = props => {
  return <ShareBlock className={styles} {...props} />;
};

ShareBlockStandard.propTypes = {};

export default ShareBlockStandard;
