import React from 'react';
import { render, cleanup } from 'react-testing-library';

import ShareBlock from '../ShareBlock';

import FaTwitter from 'react-icons/lib/fa/twitter';

afterEach(cleanup);

it(`renders without throwing an error when general obligatory props ('url' and 'buttons') are provided`, () => {
  const props = {
    url: 'https://github.com/greglobinski/react-custom-share',
    buttons: [{ network: 'Twitter', icon: FaTwitter }],
    text: `Give it a try - react-custom-share component`,
    longtext: `Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch.`,
  };

  expect(() => {
    render(<ShareBlock {...props} />);
  }).not.toThrow();
});
