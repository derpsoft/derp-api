'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchError = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FetchError = exports.FetchError = function (_Error) {
  (0, _inherits3.default)(FetchError, _Error);

  function FetchError(_ref, message, fileName, lineNumber) {
    var statusCode = _ref.statusCode,
        body = _ref.body,
        contentType = _ref.contentType;
    (0, _classCallCheck3.default)(this, FetchError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FetchError.__proto__ || (0, _getPrototypeOf2.default)(FetchError)).call(this, message, fileName, lineNumber));

    _this.statusCode = statusCode;
    _this.body = body;
    _this.contentType = contentType;
    return _this;
  }

  (0, _createClass3.default)(FetchError, [{
    key: 'field',
    value: function field(x) {
      var val = void 0;
      if (this.isJson() && this.hasBody()) {
        val = this.body.responseStatus[x];
      }
      return val;
    }
  }, {
    key: 'isJson',
    get: function get() {
      return this.contentType === 'application/json';
    }
  }, {
    key: 'hasBody',
    get: function get() {
      return !!this.body && this.body.responseStatus;
    }
  }, {
    key: 'statusDescription',
    get: function get() {
      return this.field('statusDescription');
    }
  }, {
    key: 'errorCode',
    get: function get() {
      return this.field('errorCode');
    }
  }, {
    key: 'errorMessage',
    get: function get() {
      return this.field('errorMessage');
    }
  }, {
    key: 'responseDto',
    get: function get() {
      return this.field('responseDto');
    }
  }, {
    key: 'responseStatus',
    get: function get() {
      return this.field('responseStatus');
    }
  }]);
  return FetchError;
}(Error);

exports.default = {};