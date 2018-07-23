# react-custom-share

Social media share buttons for ReactJS. Use one of the built-in button themes or create a custom one from scratch.

[![npm packgage][npm version]][nv]
[![Codecov][codecov-badge]][codecov]
[![npm][npm downloads]][nd]
[![GitHub stars][stars-badge]][stars]
[![GitHub license][mit-badge]][mit]
![contributors][contributors-badge]
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
![travis-badge]
![Tweet][twitter-badge]

---

![react-custom-share](./static/react-custom-share.gif)

> ### [Docs & Demos](https://greglobinski.github.io/react-custom-share/)

## Table of Content

* [Features](#features)
* [Roadmap](#roadmap)
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
* [Repository](#repository)
* [Tutorials](#tutorials)
* [License](#license)

## Features

- opens a share-window popup
- built-in share scripts for:
  - Facebook
  - Twitter
  - Google+
  - Linkedin
  - Pinterest
  - email
- flexibility to add share buttons for unsupported networks
- built-in styled for buttons:
  - Rectangle
  - RoundSquare
  - Circle
  - IconOnly
  - Outline
- build-in styled blocks:
  - Standard

## Installation

#### Install npm package

```
yarn add react-custom-share
```

If you prefer you can equally use `npm`.

#### Install icons

```
yarn add react-icons
```

The examples use icons provided by the `react-icons` package, but you can use any icons. However, if you want to use built-in styled buttons you have to provide `svg` icons.

#### Install CSS-in-JS library

The styled buttons use the [Emotion](https://github.com/emotion-js/emotion) library to add CSS styles to the components.

```
yarn add emotion
```

## Usage

```javascript
// import emotion
import { css } from 'emotion';

// import icons
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

// import react-custom-share components
import { ShareButtonRectangle, ShareBlockStandard } from 'react-custom-share';

const ShareComponent = props => {
  // create object with props for shareBlock
  const shareBlockProps = {
    url: 'https://mywebsite.com/page-to-share/',
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'GooglePlus', icon: FaGooglePlus },
      { network: 'Email', icon: FaEnvelope },
      { network: 'Pinterest', icon: FaPinterest, media: 'https://mywebsite.com/image-to-share.jpg' },
      { network: 'Linkedin', icon: FaLinkedin },
    ],
    text: `Give it a try - mywebsite.com `,
    longtext: `Take a look at this super website I have just found.`,
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};
```

## API

```javascript
import {
  // base components (unstyled)
  ShareButton,
  ShareBlock,

  // styled button components
  ShareButtonRoundSquare,
  ShareButtonRectangle,
  ShareButtonCircle,
  ShareButtonIconOnly,
  ShareButtonOutline,

  // styled block components
  ShareBlockStandard,
} from 'react-custom-share';
```

### `ShareButton` props

```javascript
ShareButton.propTypes = {
  /* REQUIRED props */

  // network: social network name, one of the list: Twitter, Facebook, GooglePlus, Pinterest, Linkedin or Email
  network: PropTypes.string.isRequired,
  // url: the address of the page you want to share, 'https://mywebpage.com/'
  url: PropTypes.string.isRequired,
  // children: for the styled components it must be a svg icon, in other case it could be anything
  children: PropTypes.node.isRequired,

  /* SPECIAL props */

  // media: this is a special 'prop' it's required is network's value is 'Pinterest'
  media: function(props, propName, componentName) {
    const key = props['network'].toLowerCase();
    if (key === 'pinterest' && props[propName] === undefined) {
      return new Error(
        `The prop '${propName}' is marked as required in '${componentName}' for the 'Pinterest' network, but it's value is 'undefined'.`
      );
    }
  },

  /* OPTIONAL props */

  // text: short version of message you want to share with the url
  text: PropTypes.string,
  // longtext: additional text message, if it's possible and set it's concatenated to the `text` and serve as a comment with the shared url
  longtext: PropTypes.string,
  // className: CSS style class applied to the button
  className: PropTypes.string,
  // link: 'share link' for not built-in networks
  link: PropTypes.string,
};
```

### `ShareBlock` props

```javascript
ShareBlock.propTypes = {

  /* BUTTON's props */

  // props applied to each one of the buttons rendered by the block, explained already above
  url: PropTypes.string.isRequired,
  button: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired,
  text: PropTypes.string,
  longtext: PropTypes.string,

  /* BLOCK's own props */

  // CSS style class applied to the block's outer div element
  className: PropTypes.string,
};
```

### Built-in styled components

Styled components have the same api as its base versions. They work as wrappers for the base components and set the value of the `className` prop of the inner component they wrap.

Below is the simplified code of `ShareButtonCircle`, one of the built-in styled buttons.

```javascript
import { css } from 'emotion';

const ShareButtonCircle = props => {
  return (
    <ShareButton
      className={css`
        border-radius: 50%;
        /* ... for the clarity most of the real CSS code was removed */
      `}
      {...props}
    />
  );
};

export default ShareButtonCircle;
```

## Repository

To run DEMO on localhost

**1.** Clone `react-custom-share` repository.

```
git clone https://github.com/greglobinski/react-custom-share.git
```

**2.** Move into newly created folder and install dependencies.

```
cd react-custom-share
yarn install
```

**3.** After installation run the `develop` npm script.

```
yarn develop
```

**4.** Open the `http://localhost:3001/` address in your browser.

## Tutorials

* [Add custom social sharing buttons to a GatsbyJS blog's home page](https://dev.greglobinski.com/custom-social-share-buttons-gatsby-1/)
* [Add custom social sharing buttons to GatsbyJS blog's posts](https://dev.greglobinski.com/custom-social-share-buttons-gatsby-2/)
* more coming soon

## License

The MIT License (MIT)

Copyright (c) 2018 greg lobinski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[codecov-badge]:https://img.shields.io/codecov/c/github/greglobinski/react-custom-share.svg

[codecov]:https://codecov.io/gh/greglobinski/react-custom-share


[travis-badge]: https://img.shields.io/travis/greglobinski/common-last-names.svg

[mit-badge]: https://img.shields.io/github/license/greglobinski/common-last-names.svg

[mit]: https://github.com/greglobinski/common-last-names/blob/master/LICENSE

[twitter]: https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fgreglobinski%2Freact-custom-share

[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/greglobinski/react-custom-share.svg?style=social

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square

[coc]: https://github.com/greglobinski/react-custom-share/blob/master/CODE_OF_CONDUCT.md

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square

[prs]: http://makeapullrequest.com

[contributors-badge]: https://img.shields.io/github/contributors/greglobinski/react-custom-share.svg

[npm downloads]: https://img.shields.io/npm/dm/react-custom-share.svg

[nd]: https://www.npmjs.com/package/react-custom-share

[npm version]: https://badge.fury.io/js/react-custom-share.svg

[nv]: https://badge.fury.io/js/react-custom-share

[stars-badge]: https://img.shields.io/github/stars/greglobinski/react-custom-share.svg

[stars]: https://github.com/greglobinski/react-custom-share/stargazers


