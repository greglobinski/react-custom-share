import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareButtonOutline.css';
import ShareButton from '../ShareButton';

const ShareButtonOutline = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton styleClass={`rcs-sharebutton--outline rcs-${networkClassModifier}`} {...props} />
  );
};

ShareButtonOutline.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

export default ShareButtonOutline;
