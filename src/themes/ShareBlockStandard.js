import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareBlockStandard.css';
import ShareBlock from '../ShareBlock';

const ShareBlockStandard = props => {
  return <ShareBlock themeClass="rcs-shareblock--standard" {...props} />;
};

ShareBlockStandard.propTypes = {
  url: PropTypes.string.isRequired,
  button: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired,
  text: PropTypes.string
};

export default ShareBlockStandard;
