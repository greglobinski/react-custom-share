import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareButtonDefault.css';
import ShareButton from './ShareButton';

const ShareButtonDefault = props => {
  const networkClassModifier = props.network.toLowerCase();

  return (
    <ShareButton
      defaultStyleClass={`rcs-sharebutton rcs-${networkClassModifier}`}
      {...props}
    />
  );
};

ShareButtonDefault.propTypes = {
  children: PropTypes.node.isRequired
};

export default ShareButtonDefault;
