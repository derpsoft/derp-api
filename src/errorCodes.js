// @flow
import {
  FetchError
} from './errors';
import Configuration from './configuration';

const knownCodes: {
  [statusCode: number]: string
} = {};

knownCodes[302] = 'Redirect';
knownCodes[400] = 'Validation';
knownCodes[401] = 'Unauthorized';
knownCodes[403] = 'Forbidden';
knownCodes[405] = 'Not Implemented';
knownCodes[500] = 'Server Error';

/*
  Returns a function that handles the given error code.
  If there is no error, returns a NOOP-equivalent function.
 */
export default function getErrorCodeHandler(response: Error | Object): Function {
  if (response instanceof Error) {
    return () => Configuration.globalErrorHandler(response, -1, 'Network error');
  }

  const {
    status
  } = response;
  const message = knownCodes[status];
  if (message) {
    return () => Configuration.globalErrorHandler(new FetchError(response, message), status, message);
  }

  return () => {};
}
