import objectToGetParams from '../objectToGetParams';

const urlToShare = 'https://website-to-share.com';
const textToShare = 'This is a great post';

describe('function objectToGetParams()', () => {
  test('returns empty string if param object is undefined', () => {
    expect(objectToGetParams({})).toBe('');
  });

  test('returns empty string if param object is empty', () => {
    expect(objectToGetParams({})).toBe('');
  });

  test('returns encoded string with params', () => {
    expect(
      objectToGetParams({
        u: urlToShare,
        quote: textToShare,
      })
    ).toBe('?u=https%3A%2F%2Fwebsite-to-share.com&quote=This%20is%20a%20great%20post');
  });
});
