import { createSerializer } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import * as emotion from 'emotion';
import FaTwitter from 'react-icons/lib/fa/twitter';
import React from 'react';

import ShareButtonRoundSquare from '../ShareButtonRoundSquare';

expect.addSnapshotSerializer(createSerializer(emotion));

afterEach(cleanup);

describe('<ShareButtonRoundSquare>', () => {
  test(`renders unchanged`, () => {
    const props = { url: 'https://website-to-share.com', network: 'Twitter' };

    const { container } = render(
      <ShareButtonRoundSquare {...props}>
        <FaTwitter />
      </ShareButtonRoundSquare>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
