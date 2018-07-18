import React from "react";

import FaFacebook from "react-icons/lib/fa/facebook";

import { ShareButton } from "react-custom-share";

const LiveShareButton = props => {
  const shareButtonProps = {
    url: "https://github.com/greglobinski/react-custom-share",
    network: "Facebook",
    text: "Give it a try - react-custom-share component",
    longtext:
      "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
  };

  return (
    <React.Fragment>
      <h2>ShareButton - live demo</h2>
      <div>
        <ShareButton {...shareButtonProps}>
          <FaFacebook />
        </ShareButton>
      </div>

      <style jsx>{`
        div {
          max-width: 600px;
          margin: 100px auto;
          text-align: center;
        }
        h2 {
          color: #666;
          font-size: 1.2em;
          margin: 3em 0;
          text-align: center;
        }
      `}</style>
    </React.Fragment>
  );
};

export default LiveShareButton;
