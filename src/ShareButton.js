import React from 'react';
import PropTypes from 'prop-types';
import windowOpen from './utils/windowOpen';
import getNetworkLink from './utils/getNetworkLink';

class ShareButton extends React.PureComponent {
  onClick = e => {
    e.preventDefault();

    const url = this.props.url;
    const network = this.props.network;
    const text = this.props.text;
    const networkLink = getNetworkLink({ network, url, text });

    this.openShareWindow(networkLink);
  };

  onKeyPress = e => {};

  openShareWindow = link => {
    windowOpen(link);
  };

  render() {
    const { network, children, className } = this.props;

    return (
      <button className={`${className}`} aria-label={`share on ${network}`} onClick={this.onClick}>
        {children}
      </button>
    );
  }
}

ShareButton.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ShareButton;
