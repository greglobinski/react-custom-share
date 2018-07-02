import PropTypes from 'prop-types';
import React from 'react';

import ShareButton from '../ShareButton';

import './css/ShareButtonCircle.css';

const ShareButtonCircle = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton styleClass={`rcs-sharebutton--circle rcs-${networkClassModifier}`} {...props} />
  );
};

ShareButtonCircle.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

export default ShareButtonCircle;
