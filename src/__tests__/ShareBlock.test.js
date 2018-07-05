import React from 'react';
import ReactDOM from 'react-dom';

import ShareBlock from '../ShareBlock';
import ShareButton from '../ShareButton';

import FaTwitter from 'react-icons/lib/fa/twitter';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const props = {
    url: 'https://website-to-share.com',
    button: ShareButton,
    buttons: [{ network: 'Twitter', icon: FaTwitter }],
  };

  ReactDOM.render(<ShareBlock {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
