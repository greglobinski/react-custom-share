import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

import ShareBlock from '../ShareBlock';

const StyledShareBlock = glamorous(ShareBlock)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const ShareBlockStandard = props => {
  return <StyledShareBlock {...props} />;
};

ShareBlockStandard.propTypes = {
  url: PropTypes.string.isRequired,
  button: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired,
  text: PropTypes.string,
};

export default ShareBlockStandard;
