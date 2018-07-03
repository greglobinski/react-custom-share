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
    margin: '1px',
    transition: '0.3s',
    width: '44px',

    '> svg': {
      height: '65%',
      transition: 'transform 0.3s',
      width: '65%',
    },

    ':hover': {
      '> svg': {
        fill: '#fff',
      },
    },

    '@media (any-hover: none)': {
      ':hover': {
        background: 'none',
        boxShadow: 'none',
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
    '> svg': {
      fill: colors[props.network],
    },

    ':hover': {
      background: colors[props.network],
      boxShadow: `0 0 10px ${colors[props.network]}`,
    },

    '@media (any-hover: none)': {
      ':hover > svg': {
        fill: colors[props.network],
      },
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
