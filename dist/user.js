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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function (_CrudApi) {
  (0, _inherits3.default)(User, _CrudApi);

  function User() {
    var _ret2;

    (0, _classCallCheck3.default)(this, User);

    var _this = (0, _possibleConstructorReturn3.default)(this, (User.__proto__ || (0, _getPrototypeOf2.default)(User)).call(this, 'user'));

    if (User.prototype.singleton) {
      var _ret;

      return _ret = User.prototype.singleton, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    User.prototype.singleton = _this;

    return _ret2 = _this, (0, _possibleConstructorReturn3.default)(_this, _ret2);
  }

  (0, _createClass3.default)(User, [{
    key: 'typeahead',
    value: function typeahead(query) {
      var includeDeleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var body = new URLSearchParams();
      body.set('query', query);
      body.set('includeDeleted', includeDeleted);

      return (0, _get3.default)(User.prototype.__proto__ || (0, _getPrototypeOf2.default)(User.prototype), 'get', this).call(this, this.routes.TYPEAHEAD(this.name) + '?' + body).then(function (json) {
        return json.result;
      });
    }
  }]);
  return User;
}(_base2.default);

exports.default = User;