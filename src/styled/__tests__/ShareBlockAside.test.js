import { render, cleanup } from 'react-testing-library';
import FaTwitter from 'react-icons/lib/fa/twitter';
import React from 'react';

import ShareBlockAside from '../ShareBlockAside';
import ShareButton from '../../ShareButton';

afterEach(cleanup);

const flushPromises = (time = 0) => {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
};

describe('<ShareBlockPlusAside>', () => {
  test.skip('updates fixed-buttawait flushPromises();ons CSS transform value after window.resize event', async () => {
    window.resizeTo(1024);
    await flushPromises();

    const props = {
      url: 'https://website-to-share.com',
      button: ShareButton,
      buttons: [{ network: 'Twitter', icon: FaTwitter }],
      debounce: 0,
    };

    const { getByTestId } = render(
      <div>
        <h1 className="header">Page header</h1>
        <ShareBlockAside {...props} />
      </div>
    );
    const fixedButtons = getByTestId('rcs-fixed-buttons');

    const fixedTransformBeforeResize = window.getComputedStyle(fixedButtons)
      .transform;
    window.resizeTo(800);
    await flushPromises();
    const fixedTransformAfterResize = window.getComputedStyle(fixedButtons)
      .transform;

    expect(fixedTransformBeforeResize).toBe('translate(84px,-50%)');
    expect(fixedTransformAfterResize).toBe('translate(28px,-50%)');
  });

  test(`renders unchanged`, () => {
    const props = {
      url: 'https://website-to-share.com',
      button: ShareButton,
      buttons: [{ network: 'Twitter', icon: FaTwitter }],
      header: 'Share it',
    };

    const { container } = render(<ShareBlockAside {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
