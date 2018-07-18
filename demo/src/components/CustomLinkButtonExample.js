import { stripIndent } from 'common-tags';
import PrismCode from 'react-prism';
import PropTypes from 'prop-types';
import React from 'react';
import { css } from 'emotion';

import FaRedditAlien from 'react-icons/lib/fa/reddit-alien';

import {
  ShareBlockStandard,
  ShareButtonRectangle,
  objectToGetParams,
} from '../../../src';

const CustomLinkButtonExample = props => {
  const { shareBlockProps } = props;

  const customRedditStyles = css`
    background: #5f99cf;
  `;

  const blockProps = {
    ...shareBlockProps,
    button: ShareButtonRectangle,
    buttons: [
      ...shareBlockProps.buttons,
      {
        network: 'Reddit',
        icon: FaRedditAlien,
        link: `https://www.reddit.com/submit${objectToGetParams({
          url: shareBlockProps.url,
          title: shareBlockProps.text,
        })}`,
        className: customRedditStyles,
      },
    ],
  };

  return (
    <React.Fragment>
      <h1>Buttons for a not built-in network</h1>
      <p>
        At this stage{' '}
        <code className="language-javascript">react-custom-share</code> has
        built-in 'share-link' build scripts for six networks: Facebook, Twitter,
        Google+, Linkedin, Pinterest and Email.
      </p>
      <p>
        But you can easily add share button for <b>any social network</b>, as
        long as it provides a 'share link' API.
      </p>
      <p>Assume you want to add a share button for Reddit. </p>

      <p>
        In <strong>Step 1.</strong> import additional icon.
      </p>
      <PrismCode component="pre" className="language-javascript">
        {stripIndent`
        import FaRedditAlien from 'react-icons/lib/fa/reddit-alien';
      `}
      </PrismCode>
      <p>
        In <strong>Step 3.</strong>, before the declaration of{' '}
        <code className="language-javascript">shareBlockProps</code> declare the{' '}
        <code className="language-javascript">customRedditStyles</code> variable
        and use <code className="language-javascript">emotion</code>'s{' '}
        <code className="language-javascript">css</code> metod to assign a value
        to it.
      </p>

      <p>
        Then add a new item to the
        <code className="language-javascript">shareBlockProps</code>'{' '}
        <code className="language-javascript">buttons</code> property.
      </p>

      <PrismCode component="pre" className="language-javascript">
        {stripIndent`
        const customRedditStyles = css\`
          background: #5f99cf;
        \`
        const shareBlockProps = {
          /* other props the same as in the 'A.ShareButtonRectangle' example */
          buttons: [
            /* other buttons the same as in the 'A.ShareButtonRectangle' example */
            {
              network: 'Reddit',
              icon: FaRedditAlien,
              link: \`https://www.reddit.com/submit?...\`, // you have to provide a full proper share link (with params)
              className: customRedditStyles,
            },
          ]
        };
      `}
      </PrismCode>

      <p>
        For the not built-in networks you have to provide a 'share link' on your
        own. When the <code className="language-javascript">link</code> prop is
        passed to the <code className="language-javascript">ShareButton</code>{' '}
        the props: <code className="language-javascript">text</code>,{' '}
        <code className="language-javascript">longtext</code> and{' '}
        <code className="language-javascript">network</code> are irrelevant.
      </p>

      <p>
        And below is the result. The{' '}
        <code className="language-javascript">ShareBlockStandard</code> rendered
        seven built-in styled buttons -{' '}
        <code className="language-javascript">ShareButtonRectangle</code>, and
        one of them (Reddit) uses explicitly provided 'share link'.
      </p>
      <div className="box">
        <ShareBlockStandard {...blockProps} />
      </div>
    </React.Fragment>
  );
};

CustomLinkButtonExample.propTypes = {
  shareBlockProps: PropTypes.object.isRequired,
};

export default CustomLinkButtonExample;
