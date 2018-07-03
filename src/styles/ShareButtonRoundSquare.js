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
    borderRadius: '8%',
    cursor: 'pointer',
    display: 'flex',
    height: '44px',
    justifyContent: 'center',
    margin: '3px',
    transition: '0.3s',
    width: '44px',

    '> svg': {
      fill: '#fff',
      height: '50%',
      transform: 'rotate(0) scale(1)',
      transition: '0.5s',
      width: '50%',
    },

    ':hover': {
      '> svg': {
        filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 1))',
        transform: 'rotate(360deg) scale(1.2)',
      },
    },

    '@media (any-hover: none)': {
      ':hover > svg': {
        filter: 'none',
        transform: 'rotate(0) scale(1)',
      },
    },

    '@media screen and (min-width: 330px)': {
      margin: '5px',
    },

    '@media screen and (min-width: 600px)': {
      margin: '7px',
    },

    '@media screen and (min-width: 1025px)': {
      margin: '10px',
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
