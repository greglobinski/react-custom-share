import { css } from 'emotion';
import { render } from 'react-dom';
import { stripIndent } from 'common-tags';
import React from 'react';

// eslint-disable-next-line no-unused-vars
import Prism from 'prismjs';
import PrismCode from 'react-prism';

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

import StyledButtonExample from './components/StyledButtonExample';

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
      </header>
      <section>
        <h1>Base unstyled button usage</h1>
        <p>
          <strong>Step 1.</strong> Import icons (in the examples we are using
          icons provided by{' '}
          <a href="https://github.com/react-icons/react-icons">react-icons</a>).
        </p>
        <PrismCode component="pre" className="language-javascript">
          {stripIndent`
              import FaTwitter from 'react-icons/lib/fa/twitter';
              import FaFacebook from 'react-icons/lib/fa/facebook';
              import FaGooglePlus from 'react-icons/lib/fa/google-plus';
              import FaEnvelope from 'react-icons/lib/fa/envelope';
              import FaPinterest from 'react-icons/lib/fa/pinterest';
              import FaLinkedin from 'react-icons/lib/fa/linkedin';
            `}
        </PrismCode>

        <p>
          <strong>Step 2.</strong> Import the react-custom-share's components: a
          button and a block.
        </p>
        <PrismCode component="pre" className="language-javascript">
          {stripIndent`
            import {
              ShareButton,
              ShareBlockStandard,
            } from 'react-custom-share';
          `}
        </PrismCode>

        <p>
          <strong>Step 3.</strong> Prepare an object with props for the{' '}
          <code className="language-javascript">ShareBlockStandard</code>{' '}
          component. The <code className="language-javascript">url</code>,{' '}
          <code className="language-javascript">button</code> and{' '}
          <code className="language-javascript">buttons</code> props are{' '}
          <b>required</b>.
        </p>
        <PrismCode component="pre" className="language-javascript">
          {stripIndent`
            const shareBlockProps = {
              url: 'https://github.com/greglobinski/react-custom-share',
              button: ShareButton,
              buttons: [
                { network: 'Twitter', icon: FaTwitter },
                { network: 'Facebook', icon: FaFacebook },
                { network: 'GooglePlus', icon: FaGooglePlus },
                { network: 'Email', icon: FaEnvelope },
                { network: 'Pinterest',icon: FaPinterest, media: 'https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif'},
                { network: 'Linkedin', icon: FaLinkedin },
              ],
              text: 'Give it a try - react-custom-share component',
              longtext: 'Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch.',
            };
          `}
        </PrismCode>

        <p>
          <strong>Step 4.</strong> Render the{' '}
          <code className="language-javascript">ShareBlockStandard</code>{' '}
          component with the prepared props.
        </p>
        <PrismCode component="pre" className="language-javascript">
          {stripIndent`
            return (
              <ShareBlockStandard {...shareBlockProps} />
            )
          `}
        </PrismCode>

        <p>
          <strong>Step 5.</strong> And that's the result. The{' '}
          <code className="language-javascript">ShareBlockStandard</code>{' '}
          rendered six fully functional but <strong>unstyled</strong> buttons
          (they are styled with a browser's native styles for buttons).
        </p>
        <div className="box">
          <ShareBlockStandard {...shareBlockProps} />
        </div>
      </section>
      <section>
        <h1>Built-in styled buttons usage</h1>
        <p>
          First, to use any of the built-in styled buttons import the{' '}
          <code className="language-javascript">emotion</code>'s{' '}
          <code className="language-javascript">css</code> method.
        </p>

        <PrismCode component="pre" className="language-javascript">
          {stripIndent`
            import { css } from 'emotion';
          `}
        </PrismCode>

        <StyledButtonExample
          shareBlockProps={{ ...shareBlockProps, button: ShareButtonRectangle }}
          ordinal="A"
        />

        <StyledButtonExample
          shareBlockProps={{
            ...shareBlockProps,
            button: ShareButtonRoundSquare,
          }}
          ordinal="B"
        />

        <StyledButtonExample
          shareBlockProps={{ ...shareBlockProps, button: ShareButtonCircle }}
          ordinal="C"
        />

        <StyledButtonExample
          shareBlockProps={{ ...shareBlockProps, button: ShareButtonIconOnly }}
          ordinal="D"
        />

        <StyledButtonExample
          shareBlockProps={{ ...shareBlockProps, button: ShareButtonOutline }}
          ordinal="E"
        />
      </section>
    </div>
  );
};

render(<App />, document.getElementById('root'));
