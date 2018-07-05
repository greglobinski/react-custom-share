import getNetworkLink from '../getNetworkLink';

const urlToShare = 'https://website-to-share.com';
const pictureToShare = 'https://website-to-share.com/picture-to-share.jpg';

describe('function getNetworkLink()', () => {
  test('returns a proper link for Email', () => {
    expect(
      getNetworkLink({
        network: 'Email',
        url: urlToShare,
      })
    ).toMatch(
      /^mailto:\?body=%20%0A%0A%C2%BB%20https%3A%2F%2Fwebsite-to-share.com/
    );
  });

  test('returns a proper link for Facebook', () => {
    expect(
      getNetworkLink({
        network: 'Facebook',
        url: urlToShare,
      })
    ).toMatch(
      /^https:\/\/www.facebook.com\/sharer\/sharer.php\?u=https%3A%2F%2Fwebsite-to-share.com/
    );

    expect(
      getNetworkLink({
        network: 'Facebook',
        url: urlToShare,
        text: 'Share comment',
      })
    ).toMatch(
      /^https:\/\/www.facebook.com\/sharer\/sharer.php\?u=https%3A%2F%2Fwebsite-to-share.com/
    );
  });

  test('returns a proper link for Twitter', () => {
    expect(
      getNetworkLink({
        network: 'Twitter',
        url: urlToShare,
      })
    ).toMatch(
      /^https:\/\/twitter.com\/share\?url=https%3A%2F%2Fwebsite-to-share.com/
    );
  });

  test('returns a proper link for Linkedin', () => {
    expect(
      getNetworkLink({
        network: 'Linkedin',
        url: urlToShare,
      })
    ).toMatch(
      /^https:\/\/linkedin.com\/shareArticle\?url=https%3A%2F%2Fwebsite-to-share.com/
    );
  });

  test('returns a proper link for GooglePlus', () => {
    expect(
      getNetworkLink({
        network: 'GooglePlus',
        url: urlToShare,
      })
    ).toMatch(
      /^https:\/\/plus.google.com\/share\?url=https%3A%2F%2Fwebsite-to-share.com/
    );
  });

  test('returns a proper link for Pinterest', () => {
    expect(
      getNetworkLink({
        network: 'Pinterest',
        url: urlToShare,
        media: pictureToShare,
      })
    ).toMatch(
      /^https:\/\/pinterest.com\/pin\/create\/button\/\?media=https%3A%2F%2Fwebsite-to-share.com%2Fpicture-to-share.jpg/
    );
  });

  test(`throws an Error when 'network' is undefined`, () => {
    expect(() => {
      getNetworkLink({
        network: '',
        url: urlToShare,
      });
    }).toThrow(`can't be undefined`);
  });

  test(`throws an Error when 'url' is undefined`, () => {
    expect(() => {
      getNetworkLink({
        network: 'Facebook',
        url: '',
      });
    }).toThrow(`can't be undefined`);
  });

  test(`throws an Error when 'media' is undefined for Pinterest`, () => {
    expect(() => {
      getNetworkLink({
        network: 'Pinterest',
        url: urlToShare,
      });
    }).toThrow(`can't be undefined`);
  });

  test(`throws an Error when a 'network' value is not valid`, () => {
    expect(() => {
      getNetworkLink({
        network: 'Unknown',
      });
    }).toThrow(`is not a valid value`);
  });
});
