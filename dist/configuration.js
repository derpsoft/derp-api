'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = function () {
  function config() {
    (0, _classCallCheck3.default)(this, config);
    this.token = '';
    this.apiRoot = '';
  }

  (0, _createClass3.default)(config, [{
    key: 'getAuthorizationHeader',
    value: function getAuthorizationHeader() {
      return 'Bearer ' + this.token;
    }
  }]);
  return config;
}();

;

var Configuration = new config();

exports.default = Configuration;