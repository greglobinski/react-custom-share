import React from 'react';
import PropTypes from 'prop-types';

import ShareButton from './ShareButton';

const ShareBlock = props => {
  const {
    url,
    button: Button = ShareButton,
    buttons,
    className = '',
    buttonClassName,
    ...blockRest
  } = props;

  return (
    <div className={`${className}`}>
      {buttons.map(button => {
        const { network, icon: Icon, ...buttonRest } = button;
        const rest = { ...blockRest, ...buttonRest };

        return (
          <Button
            key={network}
            network={network}
            url={url}
            className={buttonClassName}
            {...rest}
          >
            <Icon />
          </Button>
        );
      })}
    </div>
  );
};

ShareBlock.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
  longtext: PropTypes.string,
  button: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired,
  buttonClassName: PropTypes.string,
  className: PropTypes.string,
};

export default ShareBlock;
