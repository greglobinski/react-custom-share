import { cx, css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import colors from './colors';
import ShareButton from '../ShareButton';

const styles = css`
  align-items: center;
  border: 0;
  border-radius: 8%;
  cursor: pointer;
  display: flex;
  height: 44px;
  justify-content: center;
  margin: 3px;
  transition: 0.3s;
  width: 44px;

  & > svg {
    fill: #fff;
    height: auto;
    transform: rotate(0) scale(1);
    transition: 0.5s;
    width: 18px;
  }

  &:hover > svg {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
    transform: rotate(360deg) scale(1.2);
  }

  @media (any-hover: none) {
    &:hover > svg {
      filter: none;
      transform: rotate(0) scale(1);
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
`;

const dynamicStyles = props => css`
  background: ${colors[props.network]};
`;

const ShareButtonRoundSquare = props => {
  const { className, ...rest } = props;
  const dynamicStylesStr = dynamicStyles(props);

  return (
    <ShareButton
      className={cx(styles, dynamicStylesStr, className)}
      {...rest}
    />
  );
};

ShareButtonRoundSquare.propTypes = {
  className: PropTypes.string,
};

export default ShareButtonRoundSquare;
