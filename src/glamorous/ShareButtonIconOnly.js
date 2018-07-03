import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import React from 'react';

import colors from './colors';
import ShareButton from '../ShareButton';

const StyledShareButton = glamorous(ShareButton)(props => {
  return {
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
      fill: colors[props.network],
      height: '65%',
      transition: 'transform 0.3s',
      width: '65%',
    },

    ':hover': {
      background: colors[props.network],
      boxShadow: `0 0 10px ${colors[props.network]}`,

      '> svg': {
        fill: '#fff',
      },
    },

    '@media (any-hover: none)': {
      ':hover': {
        background: 'none',
        boxShadow: 'none',

        '> svg': {
          fill: colors[props.network],
        },
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
