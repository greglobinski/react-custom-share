---
title: <ShareButtonRectangle />
description: ShareButtonRectangle is a built-in, ready-to-use styled button. 
cover: cover.png
---

## Demo

[Live demo](../live-share-button-rectangle)

## Description

`ShareButtonRectangle` is a built-in, ready-to-use styled button.

It renders the base `ShareButton` component with some styling.

## Usage

```javascript
import React from "react";

import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaGooglePlus from "react-icons/lib/fa/google-plus";
import FaEnvelope from "react-icons/lib/fa/envelope";
import FaPinterest from "react-icons/lib/fa/pinterest";
import FaLinkedin from "react-icons/lib/fa/linkedin";

import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";

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
      "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
  };

  return <ShareBlockStandard {...shareBlockProps} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## ShareButtonRectangle's props

The same as [ShareButton](../share-button)
