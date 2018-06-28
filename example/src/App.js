import React, { Component } from 'react';
import {
  //ShareButton,
  ShareButtonDefault,
  //ShareContainer,
  ShareContainerDefault
} from 'react-custom-share';
import IoSocialTwitterOutline from 'react-icons/lib/io/social-twitter-outline';
import IoSocialFacebookOutline from 'react-icons/lib/io/social-facebook-outline';
import IoSocialGoogleplusOutline from 'react-icons/lib/io/social-googleplus-outline';
import IoIosEmailOutline from 'react-icons/lib/io/ios-email-outline';
import IoSocialPinterestOutline from 'react-icons/lib/io/social-pinterest-outline';
import IoSocialLinkedinOutline from 'react-icons/lib/io/social-linkedin-outline';

import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        This is our Fancy Component:
        <ShareContainerDefault>
          <ShareButtonDefault
            network="Twitter"
            url="https://dev.greglobinski.com/what-is-yaml/"
            text="TO jest tekst do zsharowania"
          >
            <FaTwitter />
          </ShareButtonDefault>
          <ShareButtonDefault
            network="Facebook"
            url="https://dev.greglobinski.com/what-is-yaml/"
            text="TO jest tekst do zsharowania"
          >
            <FaFacebook />
          </ShareButtonDefault>
          <ShareButtonDefault
            network="GooglePlus"
            url="https://dev.greglobinski.com/what-is-yaml/"
          >
            <FaGooglePlus />
          </ShareButtonDefault>
          <ShareButtonDefault
            network="Email"
            url="https://dev.greglobinski.com/what-is-yaml/"
          >
            <FaEnvelope />
          </ShareButtonDefault>
          <ShareButtonDefault
            network="Pinterest"
            url="hhttps://dev.greglobinski.com/what-is-yaml/"
            media="https://dev.greglobinski.com/static/algolia-create-app-550f290e3572463a1916e07985c6ca9b-48538.png"
          >
            <FaPinterest />
          </ShareButtonDefault>
          <ShareButtonDefault
            network="Linkedin"
            url="https://dev.greglobinski.com/post1"
          >
            <FaLinkedin />
          </ShareButtonDefault>
        </ShareContainerDefault>
        <ShareContainerDefault>
          <ShareButtonDefault network="Twitter">
            <IoSocialTwitterOutline />
          </ShareButtonDefault>
          <ShareButtonDefault network="Facebook">
            <IoSocialFacebookOutline />
          </ShareButtonDefault>
          <ShareButtonDefault network="GooglePlus">
            <IoSocialGoogleplusOutline />
          </ShareButtonDefault>
          <ShareButtonDefault network="Mail">
            <IoIosEmailOutline />
          </ShareButtonDefault>
          <ShareButtonDefault network="Pinterest">
            <IoSocialPinterestOutline />
          </ShareButtonDefault>
          <ShareButtonDefault network="Linkedin">
            <IoSocialLinkedinOutline />
          </ShareButtonDefault>
        </ShareContainerDefault>
      </div>
    );
  }
}
export default App;
