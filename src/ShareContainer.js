import React from 'react';
import PropTypes from 'prop-types';

const ShareContainer = props => {
  const { children, defaultStyleClass } = props;

  return <div className={defaultStyleClass}>{children}</div>;
};

ShareContainer.propTypes = {
  children: PropTypes.node,
  defaultStyleClass: PropTypes.string
};

export default ShareContainer;
