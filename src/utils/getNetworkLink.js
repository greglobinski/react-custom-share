import objectToGetParams from './objectToGetParams';

const generators = {
  facebook: params => {
    const { url, text = '', hashtag = '' } = params;
    return `https://www.facebook.com/sharer/sharer.php${objectToGetParams({
      u: url,
      quote: text,
      hashtag,
    })}`;
  },
  twitter: params => {
    const { url, text = '', via = '', hashtags = [] } = params;
    return `https://twitter.com/share${objectToGetParams({
      url,
      text,
      via,
      hashtags: hashtags.join(','),
    })}`;
  },
  googleplus: params => {
    const { url } = params;
    return `https://plus.google.com/share${objectToGetParams({
      url,
    })}`;
  },
  linkedin: params => {
    const { url, text = '', longerText = '' } = params;
    return `https://linkedin.com/shareArticle${objectToGetParams({
      url,
      title: text,
      summary: longerText,
    })}`;
  },
  pinterest: params => {
    const { media, text = '' } = params;
    return `https://pinterest.com/pin/create/button/${objectToGetParams({
      media,
      description: text,
    })}`;
  },
};

function getNetworkLink(params) {
  const { network, ...rest } = params;
  const { url, media } = rest;

  const key = network.toLowerCase();

  if (!key) {
    throw new Error(`the ShareButton's 'network' prop can't be undefined`);
  }

  if (!isValidNetwork(key)) {
    throw new Error(`the '${key}' is not a valid value of a 'network' prop for ShareButton`);
  }

  if (!url) {
    throw new Error(`the ShareButton's 'url' prop can't be undefined`);
  }

  if (network === 'Pinterest' && !media) {
    throw new Error(
      `the ShareButton's 'media' prop for the 'Pinterest' network can't be undefined`
    );
  }

  return generators[key](rest);
}

function isValidNetwork(key) {
  return generators.hasOwnProperty(key) ? true : false;
}

export default getNetworkLink;
