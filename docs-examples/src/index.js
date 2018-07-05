import { css } from 'emotion';
import { render } from 'react-dom';
import React from 'react';

import {
  ShareButton,
  ShareButtonRoundSquare,
  ShareButtonRectangle,
  ShareButtonCircle,
  ShareButtonIconOnly,
  ShareButtonOutline,
  ShareBlockStandard,
} from '../../src';

import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

const App = props => {
  const shareBlockProps = {
    url: 'https://github.com/greglobinski/react-custom-share',
    button: ShareButton,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'GooglePlus', icon: FaGooglePlus },
      { network: 'Email', icon: FaEnvelope },
      {
        network: 'Pinterest',
        icon: FaPinterest,
        media:
          'https://dev.greglobinski.com/static/algolia-create-app-550f290e3572463a1916e07985c6ca9b-48538.png',
      },
      { network: 'Linkedin', icon: FaLinkedin },
    ],
    text: `Give it a try - react-custom-share component`,
    longtext: `Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch.`,
  };

  return (
    <div
      className={css`
        font-family: '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        margin: 0 auto;
        max-width: 600px;

        section {
          margin: 50px 0;
        }

        h3 {
          padding: 20px 0;
          text-align: center;
          font-size: 24px;
          font-weight: normal;
          color: #666;
        }
      `}
    >
      <section>
        <h3>{'<ShareButton />'}</h3>
        <ShareBlockStandard {...shareBlockProps} />
      </section>
      <section>
        <h3>{'<ShareButtonRectangle />'}</h3>
        <ShareBlockStandard
          {...shareBlockProps}
          button={ShareButtonRectangle}
        />
      </section>
      <section>
        <h3>{'<ShareButtonRoundSquare />'}</h3>
        <ShareBlockStandard
          {...shareBlockProps}
          button={ShareButtonRoundSquare}
        />
      </section>
      <section>
        <h3>{'<ShareButtonCircle />'}</h3>
        <ShareBlockStandard {...shareBlockProps} button={ShareButtonCircle} />
      </section>
      <section>
        <h3>{'<ShareButtonIconOnly />'}</h3>
        <ShareBlockStandard {...shareBlockProps} button={ShareButtonIconOnly} />
      </section>
      <section>
        <h3>{'<ShareButtonOutline />'}</h3>
        <ShareBlockStandard {...shareBlockProps} button={ShareButtonOutline} />
      </section>
    </div>
  );
};

render(<App />, document.getElementById('root'));
