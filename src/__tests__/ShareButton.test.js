import React from 'react';
import ReactDOM from 'react-dom';
// import globals from 'globals';

import ShareButton from '../ShareButton';
import FaTwitter from 'react-icons/lib/fa/twitter';

test('renders without crashing', () => {
  const container = document.createElement('div');

  //console.log(globals.browser);

  const shareButtonProps = {
    url: 'https://dev.greglobinski.com/what-is-yaml/',
    text: "Thats's a great web page.",
    network: 'Twitter',
  };

  ReactDOM.render(
    <ShareButton {...shareButtonProps}>
      <FaTwitter />
    </ShareButton>,
    container
  );

  ReactDOM.unmountComponentAtNode(container);
});
