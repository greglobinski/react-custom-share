import { createSerializer } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import * as emotion from 'emotion';
import FaTwitter from 'react-icons/lib/fa/twitter';
import React from 'react';

import ShareButtonRectangle from '../ShareButtonRectangle';

expect.addSnapshotSerializer(createSerializer(emotion));

afterEach(cleanup);

describe('<ShareButtonRectangle>', () => {
  test(`renders unchanged`, () => {
    const props = { url: 'https://website-to-share.com', network: 'Twitter' };

    const { container } = render(
      <ShareButtonRectangle {...props}>
        <FaTwitter />
      </ShareButtonRectangle>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
