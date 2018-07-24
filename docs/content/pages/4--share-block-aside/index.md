---
title: <ShareBlockAside />
description: ShareBlockAside is a dynamic container with additional buttons floating aside the content.
cover: cover.png
---

## Demo

[Live demo](../live-share-block-aside)

## Description

`ShareBlockAside` is a built-in, ready-to-use 'share' block component.

It renders two block of share buttons, one is static placed inside/under the content, the second one is floating aside.

The floating buttons appear only when there is a free space aside.

The components script automatically hide the floating block whenever the static block is visible in the viewport. Set the `pageHeaderSelector` prop to turn on similar behavior for the title of the web page.

## Usage

Let's create a share block using `ShareBlockAside` with buttons for five networks.

**Step 1.** Import the icons. As usual, we are going to use icons provided by [react-icons](https://github.com/react-icons/react-icons).

```javascript
import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaGooglePlus from "react-icons/lib/fa/google-plus";
import FaEnvelope from "react-icons/lib/fa/envelope";
import FaPinterest from "react-icons/lib/fa/pinterest";
import FaLinkedin from "react-icons/lib/fa/linkedin";
```

**Step 2.** Import the `react-custom-share` components: a button and a block. Notice that we will use `ShareButtonRectangle` as a button component to render the items of the block.

```javascript
import { ShareButtonRectangle, ShareBlockAside } from "react-custom-share";
```

**Step 3.** Prepare an object with props for the `ShareBlockAside` component. The `url`, `button` and `buttons` are required props.

```javascript
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
    }
  ],
  text: "Give it a try - react-custom-share component",
  longtext:
    "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch.",
  header: "Share it",
  pageHeaderSelector: ".header"
};
```

Take a look at the new prop `pageHeaderSelector`. It's a distinctive prop of `ShareBlockAside`. If set the floating buttons will be hidden when the page header is visible in the viewport.

**Step 4.** Add `ShareBlockAside` to your app. Remember to pass all prepared props to the component.

```javascript
<ShareBlockAside {...shareBlockProps} />
```

**Full code**

```javascript
import React from "react";
import ReactDOM from "react-dom";
import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaGooglePlus from "react-icons/lib/fa/google-plus";
import FaEnvelope from "react-icons/lib/fa/envelope";
import FaPinterest from "react-icons/lib/fa/pinterest";
import FaLinkedin from "react-icons/lib/fa/linkedin";

import { ShareButton, ShareBlockAside } from "react-custom-share";

const App = props => {
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
      "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch.",
    header: "Share it",
    pageHeaderSelector: ".header"
  };

  return <ShareBlockAside {...shareBlockProps} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## ShareBlockStandard's props

* **header** - the inline share block's title | _string_ | optional
* **debounce**: wait option for the `debounce` method applied to `window.resize` event | number _(milliseconds)_ | optional | default: 250
* **pageHeaderSelector**: selector for `document.querySelector()` pointing the header of the web page | _string_ | optional
* other props the same as `ShareBlock`
