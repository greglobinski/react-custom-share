import { render, cleanup } from 'react-testing-library';
import FaTwitter from 'react-icons/lib/fa/twitter';
import React from 'react';

import ShareBlockStandard from '../ShareBlockStandard';
import ShareButton from '../../ShareButton';

afterEach(cleanup);

describe('<ShareBlockStandard>', () => {
  test(`renders correctly`, () => {
    const props = {
      url: 'https://website-to-share.com',
      button: ShareButton,
      buttons: [{ network: 'Twitter', icon: FaTwitter }],
    };

    const { container } = render(<ShareBlockStandard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
