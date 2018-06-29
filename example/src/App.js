import React, { Component } from 'react';
import {
  ShareButtonRoundSquare,
  ShareButtonRectangle,
  ShareButtonCircle,
  ShareButtonIconOnly,
  ShareButtonOutline,
  ShareContainerDefault
} from 'react-custom-share';

import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

class App extends Component {
  render() {
    const url = 'https://dev.greglobinski.com/what-is-yaml/';
    const text = 'TO jest tekst do zsharowania';
    const buttons = [
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
    ];

    return (
      <div className="App">
        <p>This is our Fancy Component:</p>

        <ShareContainerDefault>
          {buttons.map(button => {
            const { network, icon: Icon, ...rest } = button;

            return (
              <ShareButtonRectangle
                key={network}
                network={network}
                url={url}
                text={text}
                {...rest}
              >
                <Icon />
              </ShareButtonRectangle>
            );
          })}
        </ShareContainerDefault>

        <ShareContainerDefault>
          {buttons.map(button => {
            const { network, icon: Icon, ...rest } = button;

            return (
              <ShareButtonRoundSquare
                key={network}
                network={network}
                url={url}
                text={text}
                {...rest}
              >
                <Icon />
              </ShareButtonRoundSquare>
            );
          })}
        </ShareContainerDefault>

        <ShareContainerDefault>
          {buttons.map(button => {
            const { network, icon: Icon, ...rest } = button;

            return (
              <ShareButtonCircle
                key={network}
                network={network}
                url={url}
                text={text}
                {...rest}
              >
                <Icon />
              </ShareButtonCircle>
            );
          })}
        </ShareContainerDefault>

        <ShareContainerDefault>
          {buttons.map(button => {
            const { network, icon: Icon, ...rest } = button;

            return (
              <ShareButtonIconOnly
                key={network}
                network={network}
                url={url}
                text={text}
                {...rest}
              >
                <Icon />
              </ShareButtonIconOnly>
            );
          })}
        </ShareContainerDefault>

        <ShareContainerDefault>
          {buttons.map(button => {
            const { network, icon: Icon, ...rest } = button;

            return (
              <ShareButtonOutline
                key={network}
                network={network}
                url={url}
                text={text}
                {...rest}
              >
                <Icon />
              </ShareButtonOutline>
            );
          })}
        </ShareContainerDefault>
      </div>
    );
  }
}
export default App;
