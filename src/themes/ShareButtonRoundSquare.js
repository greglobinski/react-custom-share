import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareButtonRoundSquare.css';
import ShareButton from '../ShareButton';

const ShareButtonRoundSquare = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton
      defaultStyleClass={`rcs-sharebutton--round-square rcs-${networkClassModifier}`}
      {...props}
    />
  );
};

ShareButtonRoundSquare.propTypes = {
  children: PropTypes.node.isRequired
};

export default ShareButtonRoundSquare;
