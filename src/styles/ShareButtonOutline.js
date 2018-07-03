import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

import colors from './colors';
import ShareButton from '../ShareButton';

const StyledShareButton = glamorous(ShareButton)(
  {
    alignItems: 'center',
    background: 'none',
    border: 0,
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    height: '44px',
    justifyContent: 'center',
    margin: '3px',
    transition: '0.3s',
    width: '44px',

    '> svg': {
      fill: 'white',
      filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))',
      height: '80%',
      transition: '0.3s',
      width: '80%',
    },

    ':hover': {
      '> svg': {
        fill: '#fff',
      },
    },

    '@media (any-hover: none)': {
      ':hover > svg': {
        fill: 'white',
        filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))',
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
  },
  props => ({
    ':hover > svg': {
      fill: colors[props.network],
      filter: 'none',
    },
  })
);

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
