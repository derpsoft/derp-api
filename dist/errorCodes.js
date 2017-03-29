'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = getErrorCodeHandler;

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var knownCodes = {
  302: 'Redirect',
  400: 'Validation',
  401: 'Unauthorized',
  403: 'Forbidden',
  405: 'Not Implemented',
  500: {
    message: 'Server Error',
    formatter: function formatter(m) {
      return m;
    }
  }
};

function getErrorCodeHandler(_ref) {
  var response = _ref.response,
      json = _ref.json;
  var status = response.status;

  var handler = knownCodes[status];
  if (handler) {
    if (typeof handler === 'string') {
      return function () {
        throw new _errors.FetchError(json, handler);
      };
    } else if ((typeof handler === 'undefined' ? 'undefined' : (0, _typeof3.default)(handler)) === 'object') {
      return function () {
        var formatter = handler.formatter;
        var message = handler.message;

        if (formatter) {
          message = formatter(message);
        }
        throw new _errors.FetchError(json, message);
      };
    }
  }

  return function () {};
}