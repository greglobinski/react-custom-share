import { render, cleanup } from 'react-testing-library';
import FaTwitter from 'react-icons/lib/fa/twitter';
import React from 'react';

import ShareBlockPlusAside from '../ShareBlockPlusAside';
import ShareButton from '../../ShareButton';

afterEach(cleanup);

const flushPromises = (time = 0) => {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
};

describe('<ShareBlockPlusAside>', () => {
  test('updates fixed-buttons CSS transform value after window.resize event', async () => {
    const props = {
      url: 'https://website-to-share.com',
      button: ShareButton,
      buttons: [{ network: 'Twitter', icon: FaTwitter }],
      pageHeaderSelector: '.header',
      debounce: 0,
    };

    const { getByTestId } = render(
      <div>
        <h1 className="header">Page header</h1>
        <ShareBlockPlusAside {...props} />
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

    const { container } = render(<ShareBlockPlusAside {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
