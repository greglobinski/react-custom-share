import { css } from 'emotion';
import { render } from 'react-dom';
import React from 'react';

// eslint-disable-next-line no-unused-vars
import Prism from 'prismjs';

import {
  ShareButton,
  ShareButtonRoundSquare,
  ShareButtonRectangle,
  ShareButtonCircle,
  ShareButtonIconOnly,
  ShareButtonOutline,
} from '../../src';

import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

import BaseButtonExample from './components/BaseButtonExample';
import StyledButtonExample from './components/StyledButtonExample';
import CustomStyledButtonExample from './components/CustomStyledButtonExample';
import CustomLinkButtonExample from './components/CustomLinkButtonExample';

require('prismjs/themes/prism-okaidia.css');

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
          'https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif',
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

        p {
          line-height: 1.5;
        }

        h3 {
          font-weight: normal;
        }

        section {
          padding: 30px 0;
          margin: 30px 0;
          border-bottom: 2px dotted #999;

          &:last-child {
            border: 0;
          }
        }

        ol,
        ul {
          margin: 0 0 3em 0;

          & li {
            margin: 0.5em 0;
          }
        }

        code[class*='language-'] {
          border-radius: 2px;
          background: #f9f9f9;
          color: #666;
          padding: 2px 5px;
        }

        pre {
          margin: 1em 0 3em;
        }

        .box {
          padding: 50px 0;
          border: 1px solid #ddd;
          margin: 1em 0 3em;
        }
      `}
    >
      <header>
        <h1>react-custom-share - demo</h1>
        <p>Social share buttons for React</p>
        <p>
          Back to Github{' '}
          <a href="https://github.com/greglobinski/react-custom-share">
            repository
          </a>.
        </p>
      </header>

      <section>
        <BaseButtonExample shareBlockProps={shareBlockProps} />
      </section>

      <section>
        <h1>Built-in styled buttons usage</h1>
        <p>
          There are five buil-in styled buttons in{' '}
          <code className="language-javascript">react-custom-share</code>
        </p>
        <ol type="A">
          <li>ShareButtonRectangle</li>
          <li>ShareButtonRoundSquare</li>
          <li>ShareButtonCircle</li>
          <li>ShareButtonIconOnly</li>
          <li>ShareButtonOutline</li>
        </ol>

        <StyledButtonExample
          shareBlockProps={{ ...shareBlockProps, button: ShareButtonRectangle }}
          buttonComponentName="ShareButtonRectangle"
          ordinal="A"
        />

        <StyledButtonExample
          shareBlockProps={{
            ...shareBlockProps,
            button: ShareButtonRoundSquare,
          }}
          buttonComponentName="ShareButtonRoundSquare"
          ordinal="B"
        />

        <StyledButtonExample
          shareBlockProps={{ ...shareBlockProps, button: ShareButtonCircle }}
          buttonComponentName="ShareButtonCircle"
          ordinal="C"
        />

        <StyledButtonExample
          shareBlockProps={{ ...shareBlockProps, button: ShareButtonIconOnly }}
          buttonComponentName="ShareButtonIconOnly"
          ordinal="D"
        />

        <StyledButtonExample
          shareBlockProps={{ ...shareBlockProps, button: ShareButtonOutline }}
          buttonComponentName="ShareButtonOutline"
          ordinal="E"
        />
      </section>

      <section>
        <CustomStyledButtonExample shareBlockProps={shareBlockProps} />
      </section>

      <section>
        <CustomLinkButtonExample shareBlockProps={shareBlockProps} />
      </section>
    </div>
  );
};

render(<App />, document.getElementById('root'));
