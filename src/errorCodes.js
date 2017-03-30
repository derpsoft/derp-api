// @flow
import {
  FetchError
} from './errors';
import Configuration from './configuration';

const knownCodes: {
  '302': string,
  '400': string,
  '401': string,
  '403': string,
  '405': string,
  '500': Object,
} = {
  '302': 'Redirect',
  '400': 'Validation',
  '401': 'Unauthorized',
  '403': 'Forbidden',
  '405': 'Not Implemented',
  '500': {
    message: 'Server Error',
    formatter: m => m,
  },
};

function handleError(e: Error) {
  Configuration.globalErrorHandler(e);
  if (Configuration.throwErrors) {
    throw e;
  }
}

/*
  Returns a function that handles the given error code.
  If there is no error, returns a NOOP-equivalent function.
 */
export default function getErrorCodeHandler({
  response,
  json,
}: Object): Function {
  const {
    status
  } = response;
  const handler = knownCodes[status];
  if (handler) {
    if (typeof handler === 'string') {
      return () => {
        return handleError(new FetchError(json, handler));
      };
    } else if (typeof handler === 'object') {
      return () => {
        const {
          formatter,
        } = handler;
        let {
          message
        } = handler;
        if (formatter) {
          message = formatter(message);
        }
        return handleError(new FetchError(json, message));
      };
    }
  }

  return () => {};
}
