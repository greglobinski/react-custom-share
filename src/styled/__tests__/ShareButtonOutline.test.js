import { createSerializer } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import * as emotion from 'emotion';
import FaTwitter from 'react-icons/lib/fa/twitter';
import React from 'react';

import ShareButtonOutline from '../ShareButtonOutline';

expect.addSnapshotSerializer(createSerializer(emotion));

afterEach(cleanup);

describe('<ShareButtonOutline>', () => {
  test(`renders unchanged`, () => {
    const props = { url: 'https://website-to-share.com', network: 'Twitter' };

    const { container } = render(
      <ShareButtonOutline {...props}>
        <FaTwitter />
      </ShareButtonOutline>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
