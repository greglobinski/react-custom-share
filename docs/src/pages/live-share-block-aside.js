import React from "react";
import Lorem from "react-lorem-component";

import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaGooglePlus from "react-icons/lib/fa/google-plus";
import FaEnvelope from "react-icons/lib/fa/envelope";
import FaPinterest from "react-icons/lib/fa/pinterest";
import FaLinkedin from "react-icons/lib/fa/linkedin";

import {
  ShareButton,
  ShareButtonRectangle,
  ShareButtonCircle,
  ShareButtonRoundSquare,
  ShareButtonIconOnly,
  ShareButtonOutline,
  ShareBlockAside
} from "react-custom-share";

class LiveShareBlockAside extends React.Component {
  state = {
    activeButton: 0
  };

  shareButtons = [
    ShareButtonRectangle,
    ShareButtonCircle,
    ShareButtonRoundSquare,
    ShareButtonIconOnly,
    ShareButtonOutline,
    ShareButton
  ];

  handleChange = e => {
    this.setState({
      activeButton: e.target.value
    });
  };

  render() {
    const shareBlockProps = {
      url: "https://github.com/greglobinski/react-custom-share",
      button: this.shareButtons[this.state.activeButton],
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
        "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch.",
      header: "Share it",
      pageHeaderSelector: ".header"
    };

    return (
      <React.Fragment>
        <h2>ShareBlockAside - live demo</h2>
        <div className="options">
          <select onChange={this.handleChange} onBlur={this.handleChange}>
            <option value="0">ShareButtonRectangle</option>
            <option value="1">ShareButtonCircle</option>
            <option value="2">ShareButtonRoundSquare</option>
            <option value="3">ShareButtonIconOnly</option>
            <option value="4">ShareButtonOutline</option>
            <option value="5">ShareButton</option>
          </select>
        </div>

        <div className="article">
          <h1 className="header">This is a title of the page</h1>
          <Lorem count="15" />
          <ShareBlockAside {...shareBlockProps} />
        </div>

        <style jsx>{`
          .options {
            width: 100%;
            text-align: center;
          }
          .article {
            max-width: 560px;
            margin: 100px auto;
            padding: 0 10px;
          }
          h2 {
            color: #666;
            font-size: 1.2em;
            margin: 3em 0;
            text-align: center;
          }
          h1 {
            font-size: 3em;
            margin: 0 0 1em;
          }
          .article :global(p) {
            margin: 1.5em 0;
            line-height: 1.5;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default LiveShareBlockAside;
