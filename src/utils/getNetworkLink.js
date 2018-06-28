import objectToGetParams from './objectToGetParams';

function getNetworkLink(params) {
  const { network, ...rest } = params;
  return generateLink(network)(rest);

  return `https://www.facebook.com/sharer/sharer.php`;
}

function generateLink(network) {
  const key = network.toLowerCase();

  const generators = {
    facebook: params => {
      const { url, text = '', hashtag = '' } = params;
      return (
        `https://www.facebook.com/sharer/sharer.php` +
        objectToGetParams({
          u: url,
          quote: text,
          hashtag
        })
      );
    },
    twitter: params => {
      const { url, text = '', via = '', hashtags = [] } = params;
      return (
        `https://twitter.com/share` +
        objectToGetParams({
          url,
          text,
          via,
          hashtags: hashtags.join(',')
        })
      );
    },
    googleplus: params => {
      const { url } = params;
      return (
        `https://plus.google.com/share` +
        objectToGetParams({
          url
        })
      );
    },
    linkedin: params => {
      const { url, text = '', longerText = '' } = params;
      return (
        `https://linkedin.com/shareArticle` +
        objectToGetParams({
          url,
          title: text,
          summary: longerText
        })
      );
    },
    pinterest: params => {
      const { media, text = '' } = params;
      return (
        `https://pinterest.com/pin/create/button/` +
        objectToGetParams({
          media,
          description: text
        })
      );
    }
  };

  return generators[key];
}

export default getNetworkLink;
