import React from 'react';
import PropTypes from 'prop-types';
import './css/ShareContainerDefault.css';
import ShareContainer from './ShareContainer';

const ShareContainerDefault = props => {
  return (
    <ShareContainer
      defaultStyleClass="rcs-sharecontainer rcs-sharecontainer--default"
      {...props}
    />
  );
};

ShareContainerDefault.propTypes = {
  children: PropTypes.node
};

export default ShareContainerDefault;
