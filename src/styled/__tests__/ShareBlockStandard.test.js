import { render, cleanup } from 'react-testing-library';
import FaTwitter from 'react-icons/lib/fa/twitter';
import React from 'react';

import ShareBlockStandard from '../ShareBlockStandard';
import ShareButton from '../../ShareButton';

afterEach(cleanup);

describe('<ShareBlockStandard>', () => {
  test(`renders a header when a 'header' prop is provided`, () => {
    const props = {
      url: 'https://website-to-share.com',
      button: ShareButton,
      buttons: [{ network: 'Twitter', icon: FaTwitter }],
      header: 'Share it',
    };

    const { container } = render(<ShareBlockStandard {...props} />);

    expect(container.firstChild.textContent).toBe('Share it');
  });

  test(`does not render a header when a 'header' prop is not provided`, () => {
    const props = {
      url: 'https://website-to-share.com',
      button: ShareButton,
      buttons: [{ network: 'Twitter', icon: FaTwitter }],
    };

    const { container } = render(<ShareBlockStandard {...props} />);

    expect(container.firstChild.textContent).toBe('');
  });

  test(`renders unchanged`, () => {
    const props = {
      url: 'https://website-to-share.com',
      button: ShareButton,
      buttons: [{ network: 'Twitter', icon: FaTwitter }],
      header: 'Share it',
    };

    const { container } = render(<ShareBlockStandard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
