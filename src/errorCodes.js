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
  '500': string,
} = {
  '302': 'Redirect',
  '400': 'Validation',
  '401': 'Unauthorized',
  '403': 'Forbidden',
  '405': 'Not Implemented',
  '500': 'Server Error',
};

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
    return () => Configuration.globalErrorHandler(new FetchError(json, handler), status, handler.message);
  }

  return () => {};
}
