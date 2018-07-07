import React from 'react';
import PropTypes from 'prop-types';

const ShareBlock = props => {
  const { url, button: Button, buttons, className, ...blockRest } = props;

  return (
    <div className={`${className}`}>
      {buttons.map(button => {
        const { network, icon: Icon, ...buttonRest } = button;
        const rest = { ...blockRest, ...buttonRest };

        return (
          <Button key={network} network={network} url={url} {...rest}>
            <Icon />
          </Button>
        );
      })}
    </div>
  );
};

ShareBlock.propTypes = {
  url: PropTypes.string.isRequired,
  button: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired,
  text: PropTypes.string,
  longtext: PropTypes.string,
  header: PropTypes.string,
  className: PropTypes.string,
};

export default ShareBlock;
