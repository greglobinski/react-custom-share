import React from "react";

import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaGooglePlus from "react-icons/lib/fa/google-plus";
import FaEnvelope from "react-icons/lib/fa/envelope";
import FaPinterest from "react-icons/lib/fa/pinterest";
import FaLinkedin from "react-icons/lib/fa/linkedin";

import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";

const LiveShareButtonRectangle = props => {
  const shareBlockProps = {
    url: "https://github.com/greglobinski/react-custom-share",
    button: ShareButtonRectangle,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "GooglePlus", icon: FaGooglePlus },
      { network: "Email", icon: FaEnvelope },
      {
        network: "Pinterest",
        icon: FaPinterest,
        media:
          "https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif"
      },
      { network: "Linkedin", icon: FaLinkedin }
    ],
    text: "Give it a try - react-custom-share component",
    longtext:
      "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
  };

  return (
    <React.Fragment>
      <h2>ShareBlock - live demo</h2>
      <div>
        <ShareBlockStandard {...shareBlockProps} />
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

export default LiveShareButtonRectangle;
