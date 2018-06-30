import React from 'react';
import ReactDOM from 'react-dom';

import ShareBlock from './ShareBlock';
import ShareButton from './ShareButton';
import FaTwitter from 'react-icons/lib/fa/twitter';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const shareBlockProps = {
    url: 'https://dev.greglobinski.com/what-is-yaml/',
    button: ShareButton,
    buttons: [{ network: 'Twitter', icon: FaTwitter }],
    text: 'TO jest tekst do zsharowania',
  };

  ReactDOM.render(<ShareBlock {...shareBlockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
