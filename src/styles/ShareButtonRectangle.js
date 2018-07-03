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
        background: ${colors[props.network]};
        border: 0;
        color: #666;
        cursor: pointer;
        display: flex;
        flex-basis: 44px;
        flex-grow: 1;
        justify-content: center;
        min-height: 44px;
        overflow: hidden;
        transform: scale(1);

        & > svg {
          fill: #fff;
          height: 24px;
          transform: scale(1);
          transition: 0.3s;
          width: 24px;
        }

        &:hover > svg {
          transform: rotate(-5deg) scale(3);
        }

        @media (any-hover: none) {
          &:hover > svg {
            transform: rotate(0) scale(1);
          }
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
