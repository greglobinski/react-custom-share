import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareButtonRoundSquare.css';
import ShareButton from '../ShareButton';

const ShareButtonRoundSquare = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton
      styleClass={`rcs-sharebutton--round-square rcs-${networkClassModifier}`}
      {...props}
    />
  );
};

ShareButtonRoundSquare.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

export default ShareButtonRoundSquare;
