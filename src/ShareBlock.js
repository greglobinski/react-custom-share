import React from 'react';
import PropTypes from 'prop-types';

const ShareBlock = props => {
  const { url, button: Button, buttons, text = '', themeClass = '' } = props;

  return (
    <div className={`rcs-shareblock ${themeClass}`}>
      {buttons.map(button => {
        const { network, icon: Icon, ...rest } = button;

        return (
          <Button key={network} network={network} url={url} text={text} {...rest}>
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
  themeClass: PropTypes.string,
};

export default ShareBlock;
