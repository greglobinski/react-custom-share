import timeoutThrottlerHandler from '../timeoutThrottlerHandler';

const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
};

describe('function timeoutThrottlerHandler()', () => {
  const TIMEOUT_DELAY = 0;
  const TIMEOUT_NAME = 'resize';
  const TIMEOUT_HANDLER = jest.fn();
  const TIMEOUT_HANDLER_ONCE = jest.fn();

  test(`does not start a new timeout if there is already one with a given name`, () => {
    const timeouts = { [TIMEOUT_NAME]: 1 };
    timeoutThrottlerHandler(
      timeouts,
      TIMEOUT_NAME,
      TIMEOUT_DELAY,
      TIMEOUT_HANDLER
    );
    expect(timeouts[TIMEOUT_NAME]).toBe(1);
  });

  test(`starts a new timeout if there is not one with a given name yet`, () => {
    const timeouts = {};
    timeoutThrottlerHandler(
      timeouts,
      TIMEOUT_NAME,
      TIMEOUT_DELAY,
      TIMEOUT_HANDLER
    );
    expect(timeouts[TIMEOUT_NAME]).not.toBe(null);
  });

  test(`starts a new timeout if the previous one is fulfilled`, () => {
    const timeouts = { [TIMEOUT_NAME]: null };
    timeoutThrottlerHandler(
      timeouts,
      TIMEOUT_NAME,
      TIMEOUT_DELAY,
      TIMEOUT_HANDLER
    );
    expect(timeouts[TIMEOUT_NAME]).not.toBe(null);
  });

  test(`removes a timeout pointer after the timeout's fulfillment`, async () => {
    const timeouts = {};
    timeoutThrottlerHandler(
      timeouts,
      TIMEOUT_NAME,
      TIMEOUT_DELAY,
      TIMEOUT_HANDLER
    );

    await flushPromises();

    expect(timeouts[TIMEOUT_NAME]).toBe(null);
  });

  test(`calls timeout handler callback once after the timeout's fulfillment`, async () => {
    const timeouts = {};
    timeoutThrottlerHandler(
      timeouts,
      TIMEOUT_NAME,
      TIMEOUT_DELAY,
      TIMEOUT_HANDLER_ONCE
    );

    await flushPromises();

    expect(TIMEOUT_HANDLER_ONCE).toHaveBeenCalledTimes(1);
  });
});
