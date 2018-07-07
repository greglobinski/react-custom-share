import React from 'react';
import PropTypes from 'prop-types';
import windowOpen from './utils/windowOpen';
import getNetworkLink from './utils/getNetworkLink';

class ShareButton extends React.PureComponent {
  onClick = e => {
    e.preventDefault();

    const { url, network, text = '', longtext = '' } = this.props;
    const networkLink = getNetworkLink({ network, url, text, longtext });

    this.openShareWindow(networkLink);
  };

  openShareWindow = link => {
    windowOpen(link);
  };

  render() {
    const { network, children, className } = this.props;

    return (
      <button
        className={`${className}`}
        aria-label={`Share on ${network}`}
        onClick={this.onClick}
      >
        {children}
      </button>
    );
  }
}

ShareButton.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  longtext: PropTypes.string,
  // media prop is required when network is set to 'Pinterest'
  media: function(props, propName, componentName) {
    const key = props['network'].toLowerCase();
    if (key === 'pinterest' && props[propName] === undefined) {
      return new Error(
        `The prop '${propName}' is marked as required in '${componentName}' for the 'Pinterest' network, but it's value is 'undefined'.`
      );
    }
  },
  className: PropTypes.string,
};

export default ShareButton;
