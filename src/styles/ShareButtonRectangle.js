import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

import colors from './colors';
import ShareButton from '../ShareButton';

const StyledShareButton = glamorous(ShareButton)(props => {
  return {
    alignItems: 'center',
    background: colors[props.network],
    border: 0,
    color: '#666',
    cursor: 'pointer',
    display: 'flex',
    flexBasis: '44px',
    flexGrow: 1,
    justifyContent: 'center',
    minHeight: '44px',
    overflow: 'hidden',
    transform: 'rotate(0) scale(1)',

    '> svg': {
      fill: '#fff',
      height: '24px',
      transform: 'scale(1)',
      transition: '0.3s',
      width: '24px',
    },

    ':hover': {
      '> svg': {
        transform: 'rotate(-5deg) scale(3)',
      },
    },

    '@media (any-hover: none)': {
      ':hover > svg': {
        transform: 'rotate(0) scale(1)',
      },
    },
  };
});

const ShareButtonCircle = props => {
  return <StyledShareButton {...props} />;
};

ShareButtonCircle.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

export default ShareButtonCircle;
