import React from 'react';
import ReactDOM from 'react-dom';

import ShareButton from './ShareButton';
import FaTwitter from 'react-icons/lib/fa/twitter';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const shareButtonProps = {
    url: 'https://dev.greglobinski.com/what-is-yaml/',
    text: 'TO jest tekst do zsharowania',
    network: 'Twitter',
  };

  ReactDOM.render(
    <ShareButton {...shareButtonProps}>
      <FaTwitter />
    </ShareButton>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
