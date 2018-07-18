---
title: <ShareButton />
description: ShareButton is a base component of the library. All of the other button components are bulit on it.
cover: cover.png
---

## Demo

[Live demo](../live-share-button)

## Description

`ShareButton` is a core `react-custom-share`'s component.

It renders a HTML button tag with an `onclick` attribute pointing to the fuction which opens the 'share' pop-up window.

## Usage

Let's create a share button for Facebook.

**Step 1.** In this example, as an inner element of the button, we are going to use a svg icon provided by [react-icons](https://github.com/react-icons/react-icons). But you are free to use a bitmap image or text, anything what meets your needs.

```javascript
import FaFacebook from "react-icons/lib/fa/facebook";
```

**Step 2.** Import the button component.

```javascript
import { ShareButton } from "react-custom-share";
```

**Step 3.** Prepare an object with props for the `ShareBlock` component. The `url` and `network` are required props.

```javascript
const shareButtonProps = {
  url: "https://github.com/greglobinski/react-custom-share",
  network: "Facebook",
  text: "Give it a try - react-custom-share component",
  longtext:
    "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
};
```

**Step 4.** Add `ShareButton` to your app.

```javascript
<ShareButton {...shareButtonProps}>
  <FaFacebook />
</ShareButton>
```

**Full code**

```javascript
import React from "react";
import ReactDOM from "react-dom";
import FaFacebook from "react-icons/lib/fa/facebook";
import { ShareButton } from "react-custom-share";

const App = props => {
  const shareButtonProps = {
    url: "https://github.com/greglobinski/react-custom-share",
    network: "Facebook",
    text: "Give it a try - react-custom-share component",
    longtext:
      "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
  };

  return <ShareButton {...shareButtonProps}>
    <FaFacebook />
  </ShareButton>;
};

ReactDOM.render(<App />, document.getElementById("root"));
};
```

## ShareButton's props

* **network** - a network's name | possible values: ['Facebook', 'GooglePlus', 'Twitter', 'Linkedin', 'Pinterest', 'Email'] | _string_ | **required**
* **url** - URL of the page to share | _string_ | **required**
* **children** - an inner element of the button | _string_, _html tag_ or _React component_ | **required**
* **media** - URL of an image | **required** if network's value is 'Pinterest'
* **link** - a link to open in the 'share' pop-up window, this prop is used to set a share button for networks not suported by the built-in link builder script
* **text** - a short text shared together with the url | _string_
* **longtext** - an extension of the text shared together with the url | _string_
