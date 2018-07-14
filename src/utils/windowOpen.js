function windowOpen(url, width = 650, height = 450) {
  const left =
    window.outerWidth / 2 +
    (window.screenX || window.screenLeft || 0) -
    width / 2;
  const top =
    window.outerHeight / 2 +
    (window.screenY || window.screenTop || 0) -
    height / 2;

  const config = {
    height,
    width,
    left,
    top,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes',
  };

  const shareDialog = window.open(
    url,
    'share',
    Object.keys(config)
      .map(key => `${key}=${config[key]}`)
      .join(',')
  );

  return shareDialog;
}

export default windowOpen;
