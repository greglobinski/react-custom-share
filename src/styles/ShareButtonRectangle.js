import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareButtonRectangle.css';
import ShareButton from '../ShareButton';

const ShareButtonRectangle = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton
      defaultStyleClass={`rcs-sharebutton--rectangle rcs-${networkClassModifier}`}
      {...props}
    />
  );
};

ShareButtonRectangle.propTypes = {
  children: PropTypes.node.isRequired
};

export default ShareButtonRectangle;
