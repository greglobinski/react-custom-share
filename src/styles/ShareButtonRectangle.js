import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareButtonRectangle.css';
import ShareButton from '../ShareButton';

const ShareButtonRectangle = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton styleClass={`rcs-sharebutton--rectangle rcs-${networkClassModifier}`} {...props} />
  );
};

ShareButtonRectangle.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

export default ShareButtonRectangle;
