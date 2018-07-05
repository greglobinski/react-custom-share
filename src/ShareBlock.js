import React from 'react';
import PropTypes from 'prop-types';

const ShareBlock = props => {
  const { url, button: Button, buttons, text, className } = props;

  return (
    <div className={`${className}`}>
      {buttons.map(button => {
        const { network, icon: Icon, ...rest } = button;

        return (
          <Button
            key={network}
            network={network}
            url={url}
            text={text}
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
  button: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default ShareBlock;
