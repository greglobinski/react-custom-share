function timeoutThrottlerHandler(timeouts, name, delay, handler) {
  if (!timeouts[name]) {
    console.log('START!!!');
    timeouts[name] = setTimeout(() => {
      timeouts[name] = null;
      handler();
      console.log('DONE!!!');
    }, delay);
  }
}

export default timeoutThrottlerHandler;
