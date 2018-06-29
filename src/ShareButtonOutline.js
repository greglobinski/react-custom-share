import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareButtonOutline.css';
import ShareButton from './ShareButton';

const ShareButtonOutline = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton
      defaultStyleClass={`rcs-sharebutton--outline rcs-${networkClassModifier}`}
      {...props}
    />
  );
};

ShareButtonOutline.propTypes = {
  children: PropTypes.node.isRequired
};

export default ShareButtonOutline;
