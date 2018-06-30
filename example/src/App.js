import React, { Component } from 'react';
import {
  ShareButton,
  ShareButtonRoundSquare,
  ShareButtonRectangle,
  ShareButtonCircle,
  ShareButtonIconOnly,
  ShareButtonOutline,
  ShareBlockStandard
} from 'react-custom-share';

import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

import './App.css';

class App extends Component {
  render() {
    const shareBlockProps = {
      url: 'https://dev.greglobinski.com/what-is-yaml/',
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
            'https://dev.greglobinski.com/static/algolia-create-app-550f290e3572463a1916e07985c6ca9b-48538.png'
        },
        { network: 'Linkedin', icon: FaLinkedin }
      ],
      text: 'TO jest tekst do zsharowania'
    };

    return (
      <div className="app">
        <ShareBlockStandard {...shareBlockProps} />
        <ShareBlockStandard
          {...shareBlockProps}
          button={ShareButtonRectangle}
        />
        <ShareBlockStandard
          {...shareBlockProps}
          button={ShareButtonRoundSquare}
        />
        <ShareBlockStandard {...shareBlockProps} button={ShareButtonCircle} />
        <ShareBlockStandard {...shareBlockProps} button={ShareButtonIconOnly} />
        <ShareBlockStandard {...shareBlockProps} button={ShareButtonOutline} />
      </div>
    );
  }
}
export default App;
