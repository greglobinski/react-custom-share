import PropTypes from 'prop-types';
import React from 'react';

import ShareButton from '../ShareButton';

// import buttonStyles from './css/ShareButtonCircle.module.css';
// import networkStyles from './css/Networks.module.css';

import glamorous from 'glamorous';

const colors = {
  Facebook: 'rgba(80, 124, 190, 1)',
  Twitter: 'rgba(99, 205, 241, 1)',
  GooglePlus: 'rgba(241, 98, 97, 1)',
  Email: 'rgba(252, 201, 93, 1)',
  Pinterest: 'rgba(241, 98, 97, 1)',
  Linkedin: 'rgba(144, 202, 221, 1)',
};

const StyledShareButton = glamorous(ShareButton)(
  {
    alignItems: 'center',
    border: '0',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    height: '44px',
    justifyContent: 'center',
    margin: '3px',
    position: 'relative',
    transition: '0.3s',
    width: '44px',

    '::before': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderBottomLeftRadius: '100px',
      borderTopLeftRadius: '100px',
      color: 'inherit',
      content: '""',
      height: '100%',
      left: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-100%, -50%)',
      transition: '0.2s',
      width: '50%',
    },

    '> svg': {
      fill: '#fff',
      height: '70%',
      transform: 'scale(1)',
      transition: '0.3s',
      width: '70%',
      zIndex: 1,
    },

    ':hover': {
      '::before': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        transform: 'translate(0%, -50%) rotateY(180deg)',
      },

      '> svg': {
        transform: 'scale(1.2)',
      },
    },

    '@media (any-hover: none)': {
      ':hover::before': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        transform: 'translate(-100%, -50%)',
      },

      ':hover > svg': {
        transform: 'scale(1)',
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
  props => ({ background: colors[props.network] })
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
