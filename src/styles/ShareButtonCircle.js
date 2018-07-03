import PropTypes from 'prop-types';
import React from 'react';

import ShareButton from '../ShareButton';

import buttonStyles from './css/ShareButtonCircle.module.css';
import networkStyles from './css/Networks.module.css';

const ShareButtonCircle = props => {
  const networkClass = props.network.toLowerCase();

  return (
    <ShareButton
      styleClass={`${buttonStyles.sharebutton} ${networkStyles[networkClass]}`}
      {...props}
    />
  );
};

ShareButtonCircle.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

export default ShareButtonCircle;
