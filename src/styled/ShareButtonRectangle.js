import { cx, css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import colors from './colors';
import ShareButton from '../ShareButton';

const styles = css`
  align-items: center;
  border: 0;
  color: #666;
  cursor: pointer;
  display: flex;
  flex-basis: 44px;
  flex-grow: 1;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  overflow: hidden;
  transform: scale(1);

  & > svg {
    fill: #fff;
    height: auto;
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
`;

const dynamicStyles = props => css`
  background: ${colors[props.network]};
`;

const ShareButtonRectangle = props => {
  const { className, ...rest } = props;
  const dynamicClassName = dynamicStyles(props);

  return (
    <ShareButton
      className={cx(styles, dynamicClassName, className)}
      {...rest}
    />
  );
};

ShareButtonRectangle.propTypes = {
  className: PropTypes.string,
};

export default ShareButtonRectangle;
