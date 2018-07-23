import { createSerializer } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import * as emotion from 'emotion';
import FaTwitter from 'react-icons/lib/fa/twitter';
import React from 'react';

import ShareButtonIconOnly from '../ShareButtonIconOnly';

expect.addSnapshotSerializer(createSerializer(emotion));

afterEach(cleanup);

describe('<ShareButtonIconOnly>', () => {
  test(`renders unchanged`, () => {
    const props = { url: 'https://website-to-share.com', network: 'Twitter' };

    const { container } = render(
      <ShareButtonIconOnly {...props}>
        <FaTwitter />
      </ShareButtonIconOnly>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
