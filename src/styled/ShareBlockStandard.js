import { css } from 'emotion';
import React from 'react';

import ShareBlock from '../ShareBlock';

const styles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ShareBlockStandard = props => {
  return <ShareBlock className={styles} {...props} />;
};

ShareBlockStandard.propTypes = {};

export default ShareBlockStandard;
