import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import colors from './colors';
import ShareButton from '../ShareButton';

const ShareButtonCircle = props => {
  return (
    <ShareButton
      className={css`
        align-items: center;
        background: none;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        height: 44px;
        justify-content: center;
        margin: 1px;
        transition: 0.3s;
        width: 44px;

        & > svg {
          fill: ${colors[props.network]};
          height: 65%;
          transition: transform 0.3s;
          width: 65%;
        }

        &:hover {
          background: ${colors[props.network]};
          box-shadow: 0 0 10px ${colors[props.network]};

          & > svg {
            fill: #fff;
          }
        }

        @media (any-hover: none) {
          &:hover {
            background: none;
            box-shadow: none;

            & > svg {
              fill: ${colors[props.network]};
            }
          }
        }

        @media (min-width: 330px) {
          margin: 5px;
        }

        @media (min-width: 600px) {
          margin: 7px;
        }

        @media (min-width: 1025px) {
          margin: 10px;
        }
      `}
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
