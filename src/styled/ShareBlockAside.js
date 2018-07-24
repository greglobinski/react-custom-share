import { css, cx, injectGlobal } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import debounce from 'lodash.debounce';

import ShareBlock from '../ShareBlock';

if (typeof window !== 'undefined') {
  require('intersection-observer');
}

injectGlobal`
  body {
    height: 100%;
  }
`;

const styles = css`
  display: flex;
  flex-direction: column;

  & .rcs-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  & .rcs-buttons--fixed {
    flex-direction: column;
    left: 0;
    position: fixed;
    top: 50%;
    transform: translate(-101%, -50%);
    transform-origin: center;
    transition: 0.3s;
    width: 44px;

    & .rcs-button {
      margin-left: 0;
      margin-right: 0;
    }
  }

  & .rcs-header {
    font-family: '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
    line-height: 1;
    margin: 0 0 0.5em 0;
    text-align: center;
  }
`;

const dynamicStyles = state => css`
  & .rcs-buttons--fixed {
    transform: ${state.fixedButtonsVisible
      ? `translate(${state.fixedButtonsTranslation}px, -50%)`
      : 'translate(-101%, -50%)'};
  }
`;

class ShareBlockAside extends React.Component {
  timeouts = {};
  observer;
  observerTargets = [];

  shareBlock = React.createRef();

  state = {
    fixedButtonsVisible: false,
    fixedButtonsTranslation: -101,
  };

  componentDidMount() {
    if (typeof window !== `undefined`) {
      this.setupObserver();
      this.setFixedButtonsTranslation();

      window.addEventListener(
        'resize',
        debounce(this.setFixedButtonsTranslation, this.props.debounce),
        false
      );
    }
  }

  componentWillUnmount() {
    // unobserve the targets
    for (var value of this.observerTargets) {
      this.observer.unobserve(value);
    }
  }

  setFixedButtonsTranslation = () => {
    const documentWidth = document.documentElement.clientWidth;
    const blockWidth = document.querySelector('.rcs-block').offsetWidth;
    const freeSpace = (documentWidth - blockWidth) / 2;
    const fixedButtonsWidth = document.querySelector('.rcs-buttons--fixed')
      .offsetWidth;

    const fixedButtonsTranslation = (freeSpace - fixedButtonsWidth) / 2;
    const isFreeSpace = freeSpace > fixedButtonsWidth * 2;

    this.setState({
      fixedButtonsTranslation: isFreeSpace ? fixedButtonsTranslation : -101,
    });
  };

  setupObserver = () => {
    const options = { rootMargin: '0px', threshold: [0.5] };
    this.observer = new IntersectionObserver(this.handleIntersect, options);

    // add inline buttons to targets
    this.observerTargets.push(document.querySelector('.rcs-buttons--inline'));

    // add page header to targets, if selector is provided
    const { pageHeaderSelector } = this.props;
    if (this.props.pageHeaderSelector) {
      this.observerTargets.push(document.querySelector(pageHeaderSelector));
    }

    // observe the targets
    for (var value of this.observerTargets) {
      this.observer.observe(value);
    }
  };

  handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (this.state.fixedButtonsTranslation) {
        this.setState({
          fixedButtonsVisible: entry.intersectionRatio > 0.5 ? false : true,
        });
      }
    });
  };

  render() {
    const { className, header, htmlAttributes } = this.props;
    const dynamicStylesStr = dynamicStyles(this.state);

    return (
      <div
        ref={this.shareBlock}
        className={cx(styles, dynamicStylesStr, className, 'rcs-block')}
        data-testid="rcs-block"
      >
        {header && <p className="rcs-header">{header}</p>}
        <ShareBlock
          {...this.props}
          className="rcs-buttons--inline"
          htmlAttributes={{
            ...htmlAttributes,
            'data-testid': 'rcs-inline-buttons',
          }}
        />
        <ShareBlock
          {...this.props}
          className="rcs-buttons--fixed"
          htmlAttributes={{
            ...htmlAttributes,
            'data-testid': 'rcs-fixed-buttons',
          }}
        />
      </div>
    );
  }
}

ShareBlockAside.propTypes = {
  header: PropTypes.string,
  className: PropTypes.any,
  htmlAttributes: PropTypes.object,
  debounce: PropTypes.number,
  pageHeaderSelector: PropTypes.string,
};

ShareBlockAside.defaultProps = {
  className: '',
  header: '',
  htmlAttributes: {},
  debounce: 250,
};

export default ShareBlockAside;
