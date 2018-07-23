import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import ShareButton from '../ShareButton';
import FaTwitter from 'react-icons/lib/fa/twitter';

afterEach(cleanup);

describe('<ShareButton>', () => {
  test(`renders without throwing an error when general obligatory props ('url' and 'network') are provided`, () => {
    const props = {
      url: 'https://website-to-share.com',
      network: 'Twitter',
    };

    expect(() => {
      render(
        <ShareButton {...props}>
          <FaTwitter />
        </ShareButton>
      );
    }).not.toThrow();
  });

  test(`throws an error when an obligatory prop 'network' is not provided`, () => {
    const props = {
      url: 'https://website-to-share.com',
    };

    expect(() => {
      render(
        <ShareButton {...props}>
          <FaTwitter />
        </ShareButton>
      );
    }).toThrow();
  });

  test(`throws an error when an obligatory prop 'url' is not provided`, () => {
    const props = {
      network: 'Twitter',
    };

    expect(() => {
      render(
        <ShareButton {...props}>
          <FaTwitter />
        </ShareButton>
      );
    }).toThrow();
  });

  test(`throws an error when an obligatory prop 'media' for Pinterest 'network' is not provided`, () => {
    const props = {
      network: 'Pinterest',
      url: 'https://website-to-share.com',
    };

    expect(() => {
      render(
        <ShareButton {...props}>
          <FaTwitter />
        </ShareButton>
      );
    }).toThrow();
  });

  test(`when clicked, calls the window's 'open' method with proper params `, () => {
    const jsdomWindowOpenMethod = window.open;
    window.open = jest.fn((url, name, params) => {});

    const props = {
      url: 'https://website-to-share.com',
      network: 'Twitter',
    };

    const { getByLabelText } = render(
      <ShareButton {...props}>
        <FaTwitter />
      </ShareButton>
    );

    const button = getByLabelText(new RegExp(props.network));
    fireEvent.click(button);

    expect(window.open).toBeCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(
      'https://twitter.com/share?url=https%3A%2F%2Fwebsite-to-share.com',
      'share',
      expect.stringMatching(
        /^height=\d+,width=\d+,left=\d+,top=\d+,location=no,toolbar=no,status=no,directories=no,menubar=no,scrollbars=yes,resizable=no,centerscreen=yes,chrome=yes/
      )
    );

    window.open = jsdomWindowOpenMethod;
  });

  test(`properly calls the window's 'open' method also when 'link' prop is provided `, () => {
    const jsdomWindowOpenMethod = window.open;
    window.open = jest.fn((url, name, params) => {});

    const props = {
      url: 'https://website-to-share.com',
      network: 'Unsupported',
      link:
        'https://unsupported.network.com/share?url=https%3A%2F%2Fwebsite-to-share.com',
    };

    const { getByLabelText } = render(
      <ShareButton {...props}>
        <FaTwitter />
      </ShareButton>
    );

    const button = getByLabelText(new RegExp(props.network));
    fireEvent.click(button);

    expect(window.open).toBeCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(
      'https://unsupported.network.com/share?url=https%3A%2F%2Fwebsite-to-share.com',
      'share',
      expect.stringMatching(
        /^height=\d+,width=\d+,left=\d+,top=\d+,location=no,toolbar=no,status=no,directories=no,menubar=no,scrollbars=yes,resizable=no,centerscreen=yes,chrome=yes/
      )
    );

    window.open = jsdomWindowOpenMethod;
  });
});
