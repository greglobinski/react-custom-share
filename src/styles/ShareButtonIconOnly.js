import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareButtonIconOnly.css';
import ShareButton from '../ShareButton';

const ShareButtonIconOnly = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton styleClass={`rcs-sharebutton--icon-only rcs-${networkClassModifier}`} {...props} />
  );
};

ShareButtonIconOnly.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

export default ShareButtonIconOnly;
