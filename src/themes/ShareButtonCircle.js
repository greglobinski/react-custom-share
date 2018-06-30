import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareButtonCircle.css';
import ShareButton from '../ShareButton';

const ShareButtonCircle = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton
      defaultStyleClass={`rcs-sharebutton--circle rcs-${networkClassModifier}`}
      {...props}
    />
  );
};

ShareButtonCircle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShareButtonCircle;
