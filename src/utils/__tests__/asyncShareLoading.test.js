import { createSerializer } from 'jest-emotion';
import { render, cleanup } from 'react-testing-library';
import * as emotion from 'emotion';
import FaTwitter from 'react-icons/lib/fa/twitter';
import React from 'react';

import asyncShareLoading from '../asyncShareLoading';

expect.addSnapshotSerializer(createSerializer(emotion));

const flushPromises = (time = 0) => {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
};

afterEach(cleanup);

describe('function asyncShareLoading()', () => {
  test(`presents a 'Loading...' message while it's loading the 'import'`, () => {
    const props = { url: 'https://website-to-share.com', network: 'Twitter' };

    const AsyncShareButton = asyncShareLoading(() =>
      import('../../ShareButton')
        .then(module => {
          return module;
        })
        .catch(error => {})
    );

    const { container } = render(
      <AsyncShareButton {...props}>
        <FaTwitter />
      </AsyncShareButton>
    );

    expect(container.textContent).toBe('Loading...');
  });

  test(`renders the 'import' when it's loaded`, async () => {
    const props = { url: 'https://website-to-share.com', network: 'Twitter' };

    const AsyncShareButton = asyncShareLoading(() =>
      import('../../ShareButton')
        .then(module => {
          return module;
        })
        .catch(error => {})
    );

    const { container } = render(
      <AsyncShareButton {...props}>
        <FaTwitter />
      </AsyncShareButton>
    );

    await flushPromises();

    expect(container.firstChild.tagName).toBe('BUTTON');
  });
});
