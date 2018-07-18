---
title: <ShareBlockStandard />
description: ShareBlockStandard is a simple minimally styled container for 'share' buttons with optional header.
cover: cover.png
---

## Demo

[Live demo](../live-share-block)

## Description

`ShareBlockStandard` is a built-in, ready-to-use 'share' block component.

It renders one or more share buttons inside a `flex` container with optional header inside `<p>` tag.

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

  return <ShareBlockStandard {...shareBlockProps} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## ShareBlockStandard's props

#### Block's own props

* **header** - a share block title | _string_
* other props the same as `ShareBlock`
