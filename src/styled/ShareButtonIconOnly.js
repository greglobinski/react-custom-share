import { cx, css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import colors from './colors';
import ShareButton from '../ShareButton';

const styles = css`
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
    height: auto;
    transition: transform 0.3s;
    width: 24px;
  }

  &:hover > svg {
    fill: #fff;
  }

  @media (any-hover: none) {
    &:hover {
      background: none;
      box-shadow: none;
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
  & > svg {
    fill: ${colors[props.network]};
  }

  &:hover {
    background: ${colors[props.network]};
    box-shadow: 0 0 10px ${colors[props.network]};
  }

  @media (any-hover: none) {
    &:hover > svg {
      fill: ${colors[props.network]};
    }
  }
`;

const ShareButtonIconOnly = props => {
  const { className, ...rest } = props;
  const dynamicStylesStr = dynamicStyles(props);

  return (
    <ShareButton
      className={cx(styles, dynamicStylesStr, className)}
      {...rest}
    />
  );
};

ShareButtonIconOnly.propTypes = {
  className: PropTypes.any,
};

export default ShareButtonIconOnly;
