# react-custom-share

Social media share buttons for ReactJS. Use one of the built-in button themes or create a custom one from scratch.

## Features

- opens a share-window popup
- built-in share scripts for:
  - Facebook
  - Twitter
  - Google+
  - Linkedin
  - Pinterest
  - email
- built-in styled share buttons:
  - Rectangle
  - RoundSquare
  - Circle
  - IconOnly
  - Outline
- build-in styled share blocks:
  - Standard

## Roadmap

- Add built-in scripts for more networks
- Add functionality to create a share script for any social network
- Add more built-in styled buttons/blocks
- Add share counts

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

```
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
import {
  ShareButtonRectangle,
  ShareBlockStandard,
} from 'react-custom-share';

const ShareComponent = props => {

  // create object with props for shareBlock
  const shareBlockProps = {
    url: 'https://github.com/greglobinski/react-custom-share',
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'GooglePlus', icon: FaGooglePlus },
      { network: 'Email', icon: FaEnvelope },
      {
        network: 'Pinterest',
        icon: FaPinterest,
        media:
          'https://dev.greglobinski.com/static/algolia-create-app-550f290e3572463a1916e07985c6ca9b-48538.png',
      },
      { network: 'Linkedin', icon: FaLinkedin },
    ],
    text: `Give it a try - react-custom-share component`,
    longtext: `Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch.`,
  };

  return (
    <ShareBlockStandard {...shareBlockProps} />
  )

}
```

## Demo

[View demo](https://github.com/emotion-js/emotion)

#### Run demo on localhost

Clone `react-custom-share` package.

```
git clone https://github.com/greglobinski/react-custom-share.git
```

Move into newly created folder and install dependencies.

```
cd react-custom-share
yarn install
```

After installation run the `develop` npm script.

```
yarn develop
```

Open the `http://localhost:3001/` address in your browser.

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
