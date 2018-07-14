import { css } from 'emotion';
import { stripIndent } from 'common-tags';
import PrismCode from 'react-prism';
import PropTypes from 'prop-types';
import React from 'react';

import { ShareBlockStandard, ShareButtonRectangle } from '../../../src';

const CustomStyledButtonExample = props => {
  const { shareBlockProps } = props;

  const customButtonStyles = css`
    border-radius: 50% 0 50% 0;
    margin: 0 10px;
    flex-basis: 60px;
    height: 60px;
    flex-grow: 0;
  `;

  return (
    <React.Fragment>
      <h1>Customize a built-in styled button</h1>
      <p>
        Assume you want to use{' '}
        <code className="language-javascript">ShareButtonRectangle</code>, but
        you need to change its look a little bit.
      </p>
      <p>
        In the <strong>Step 1.</strong> import the{' '}
        <code className="language-javascript">emotion</code>'s{' '}
        <code className="language-javascript">css</code> method.
      </p>

      <PrismCode component="pre" className="language-javascript">
        {stripIndent`
            import { css } from 'emotion';
          `}
      </PrismCode>
      <p>
        The <strong>Step 2.</strong> remains the same.
      </p>
      <PrismCode component="pre" className="language-javascript">
        {stripIndent`
        import {
          ShareButtonRectangle,
          ShareBlockStandard,
        } from 'react-custom-share';
      `}
      </PrismCode>
      <p>
        In <strong>Step 3.</strong>, before the declaration of{' '}
        <code className="language-javascript">shareBlockProps</code> declare the{' '}
        <code className="language-javascript">customButtonStyles</code> variable
        and use <code className="language-javascript">emotion</code>'s{' '}
        <code className="language-javascript">css</code> metod to assign a value
        to it.
      </p>

      <p>
        Then add a new prop{' '}
        <code className="language-javascript">buttonCustomClassName</code> to{' '}
        <code className="language-javascript">shareBlockProps</code>{' '}
      </p>
      <PrismCode component="pre" className="language-javascript">
        {stripIndent`
        const customButtonStyles = css\`
          border-radius: 50% 0 50% 0;
          margin: 0 10px;
          flex-basis: 60px;
          height: 60px;
          flex-grow: 0;
        \`
        const shareBlockProps = {
          button: ShareButtonRectangle,
          /* other props the same as in the unstyled button case */
          buttonClassName: customButtonStyles,
        };
      `}
      </PrismCode>
      <p>
        And that's the result. The{' '}
        <code className="language-javascript">ShareBlockStandard</code> rendered
        six built-in styled buttons -{' '}
        <code className="language-javascript">ShareButtonRectangle</code>.
      </p>
      <div className="box">
        <ShareBlockStandard
          {...shareBlockProps}
          button={ShareButtonRectangle}
          buttonClassName={customButtonStyles}
        />
      </div>
    </React.Fragment>
  );
};

CustomStyledButtonExample.propTypes = {
  shareBlockProps: PropTypes.object.isRequired,
};

export default CustomStyledButtonExample;
