import {
  FetchError
} from './errors';

const knownCodes = {
  302: 'Redirect',
  400: 'Validation',
  401: 'Unauthorized',
  403: 'Forbidden',
  405: 'Not Implemented',
  500: {
    message: 'Server Error',
    formatter: m => m,
  },
};

/*
  Returns a function that handles the given error code.
  If there is no error, returns a NOOP-equivalent function.
 */
export default function getErrorCodeHandler({
  response,
  json,
}) {
  const {
    status
  } = response;
  const handler = knownCodes[status];
  if (handler) {
    if (typeof handler === 'string') {
      return () => {
        throw new FetchError(json, handler);
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
        throw new FetchError(json, message);
      };
    }
  }

  return () => {};
}