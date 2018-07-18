---
title: <ShareBlock />
description: ShareBlock is a base component of the library. All of the other block components are built on it.
cover: cover.png
---

## Demo

[Live demo](../live-share-block)

## Description

`ShareBlock` is a base `react-custom-share`'s component.

It renders one or more share buttons inside a `div` container.

## Usage

Let's create a share block with three items, for Facebook, Twitter and GooglePlus.

**Step 1.** Import the icons. As usual, we are going to use icons provided by [react-icons](https://github.com/react-icons/react-icons).

```javascript
import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaGooglePlus from "react-icons/lib/fa/google-plus";
```

**Step 2.** Import the `react-custom-share`'s components: a button and a block.

```javascript
import { ShareButton, ShareBlock } from "react-custom-share";
```

**Step 3.** Prepare an object with props for the `ShareBlock` component. The `url`, `button` and `buttons` are required props.

```javascript
const shareBlockProps = {
  url: "https://github.com/greglobinski/react-custom-share",
  buttons: [
    { network: "Twitter", icon: FaTwitter },
    { network: "Facebook", icon: FaFacebook },
    { network: "GooglePlus", icon: FaGooglePlus }
  ],
  text: "Give it a try - react-custom-share component",
  longtext:
    "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
};
```

**Step 4.** Add `ShareBlock` to your app. Remember to pass all prepared props to the component.

```javascript
<ShareBlockStandard {...shareBlockProps} />
```

**Full code**

```javascript
import React from "react";
import ReactDOM from "react-dom";
import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaGooglePlus from "react-icons/lib/fa/google-plus";
import { ShareButton, ShareBlock } from "react-custom-share";

const App = props => {
  const shareBlockProps = {
    url: "https://github.com/greglobinski/react-custom-share",
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "GooglePlus", icon: FaGooglePlus }
    ],
    text: "Give it a try - react-custom-share component",
    longtext:
      "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
  };

  return <ShareBlock {...shareBlockProps} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## ShareBlock's props

#### Block's own props

* **className** - a CSS class name | _string_

#### Props delegated to buttons

* **url** - URL of the page to share | _string_ | **required**
* **buttons** - an array of objects with props for the buttons rendered by the block component | _array_ | **required**
* **button** - a button component, if not set `ShareButton` will be used | _React component_
* **text** - a short text shared together with the url | _string_
* **longtext** - an extension of the text shared together with the url | _string_
