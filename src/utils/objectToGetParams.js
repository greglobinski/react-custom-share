function objectToGetParams(object) {
  const params = Object.keys(object).filter(key => !!object[key]);

  if (!params.length) {
    return '';
  }

  return '?' + params.map(key => `${key}=${encodeURIComponent(object[key])}`).join('&');
}

export default objectToGetParams;
