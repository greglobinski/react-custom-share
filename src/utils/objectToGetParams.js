function objectToGetParams(object) {
  const params = Object.keys(object)
    .filter(key => !!object[key])
    .map(key => `${key}=${encodeURIComponent(object[key])}`)
    .join('&');

  return `?${params}`;
}

export default objectToGetParams;
