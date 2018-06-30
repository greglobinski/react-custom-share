import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareButtonIconOnly.css';
import ShareButton from '../ShareButton';

const ShareButtonIconOnly = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton
      defaultStyleClass={`rcs-sharebutton--icon-only rcs-${networkClassModifier}`}
      {...props}
    />
  );
};

ShareButtonIconOnly.propTypes = {
  children: PropTypes.node.isRequired
};

export default ShareButtonIconOnly;
