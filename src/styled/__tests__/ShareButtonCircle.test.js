import { createSerializer } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import * as emotion from 'emotion';
import FaTwitter from 'react-icons/lib/fa/twitter';
import React from 'react';

import ShareButtonCircle from '../ShareButtonCircle';

expect.addSnapshotSerializer(createSerializer(emotion));

afterEach(cleanup);

describe('<ShareButtonCircle>', () => {
  test(`renders unchanged`, () => {
    const props = { url: 'https://website-to-share.com', network: 'Twitter' };

    const { container } = render(
      <ShareButtonCircle {...props}>
        <FaTwitter />
      </ShareButtonCircle>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
