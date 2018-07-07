import { stripIndent } from 'common-tags';
import PrismCode from 'react-prism';
import PropTypes from 'prop-types';
import React from 'react';

import { ShareBlockStandard } from '../../../src';

const StyledButtonExample = props => {
  const {
    shareBlockProps,
    ordinal,
    shareBlockProps: {
      button: { name: ButtonComponentName },
    },
  } = props;

  return (
    <React.Fragment>
      <h3>
        <b>{ordinal}.</b> {ButtonComponentName}
      </h3>
      <p>
        In <strong>Step 2.</strong> instead importing unstyled base button
        component <code className="language-javascript">ShareButton</code>{' '}
        import the styled one. In this case{' '}
        <code className="language-javascript">{ButtonComponentName}</code>.
      </p>
      <PrismCode component="pre" className="language-javascript">
        {stripIndent`
        import {
          ${ButtonComponentName}, // « the unstyled ShareButton is replaced with the styled one
          ShareBlockStandard,
        } from 'react-custom-share';
      `}
      </PrismCode>
      <p>
        In <strong>Step 3.</strong> set the imported styled component as a value
        of the
        <code className="language-javascript">button</code> prop for the{' '}
        <code className="language-javascript">ShareBlockStandard</code>{' '}
        component.
      </p>
      <PrismCode component="pre" className="language-javascript">
        {stripIndent`
        const shareBlockProps = {
          button: ${ButtonComponentName}, // «
          // other props the same as in the unstyled button case
        };
      `}
      </PrismCode>
      <p>
        And that's the result. The{' '}
        <code className="language-javascript">ShareBlockStandard</code> renderd
        six built-in styled buttons -{' '}
        <code className="language-javascript">{ButtonComponentName}</code>.
      </p>
      <div className="box">
        <ShareBlockStandard {...shareBlockProps} />
      </div>
    </React.Fragment>
  );
};

StyledButtonExample.propTypes = {
  shareBlockProps: PropTypes.object.isRequired,
  ordinal: PropTypes.string.isRequired,
};

export default StyledButtonExample;
