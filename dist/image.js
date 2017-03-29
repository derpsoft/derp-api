'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _configuration = require('./configuration');

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function (_CrudApi) {
  (0, _inherits3.default)(Image, _CrudApi);

  function Image() {
    (0, _classCallCheck3.default)(this, Image);
    return (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).call(this, 'image'));
  }

  (0, _createClass3.default)(Image, [{
    key: 'getImageUploadUrl',
    value: function getImageUploadUrl() {
      return _configuration2.default.apiRoot + '/api/v1/images';
    }
  }, {
    key: 'imageUploadIntercept',
    value: function imageUploadIntercept(file, xhr) {
      (0, _get3.default)(Image.prototype.__proto__ || (0, _getPrototypeOf2.default)(Image.prototype), 'prepareXhr', this).call(this, xhr);
    }
  }]);
  return Image;
}(_base2.default);

exports.default = Image;