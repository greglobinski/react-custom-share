import { stripIndent } from 'common-tags';
import PrismCode from 'react-prism';
import PropTypes from 'prop-types';
import React from 'react';

import { ShareBlockStandard } from '../../../src';

const BaseButtonExample = props => {
  const { shareBlockProps } = props;

  return (
    <React.Fragment>
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
        <code className="language-javascript">ShareBlockStandard</code> rendered
        six fully functional but <strong>unstyled</strong> buttons (they are
        styled with a browser's native styles for buttons).
      </p>
      <div className="box">
        <ShareBlockStandard {...shareBlockProps} />
      </div>
    </React.Fragment>
  );
};

BaseButtonExample.propTypes = {
  shareBlockProps: PropTypes.object.isRequired,
};

export default BaseButtonExample;
