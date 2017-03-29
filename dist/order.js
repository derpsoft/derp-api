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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodashInflection = require('lodash-inflection');

var _lodashInflection2 = _interopRequireDefault(_lodashInflection);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_lodash2.default.mixin(_lodashInflection2.default);

var Order = function (_CrudApi) {
  (0, _inherits3.default)(Order, _CrudApi);

  function Order() {
    var _ret2;

    (0, _classCallCheck3.default)(this, Order);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Order.__proto__ || (0, _getPrototypeOf2.default)(Order)).call(this, 'order', {
      CAPTURE_BILLING: function CAPTURE_BILLING(x, id) {
        return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower() + '/' + id + '/billing';
      },
      UPDATE_STATUS: function UPDATE_STATUS(x, id, status) {
        return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower() + '/' + id + '/' + status;
      },
      GET_ORDER_BY_KEY: function GET_ORDER_BY_KEY(x, id, key) {
        return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower() + '/summary/' + key + '/' + id;
      }
    }));

    if (Order.prototype.singleton) {
      var _ret;

      return _ret = Order.prototype.singleton, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    Order.prototype.singleton = _this;

    return _ret2 = _this, (0, _possibleConstructorReturn3.default)(_this, _ret2);
  }

  (0, _createClass3.default)(Order, [{
    key: 'captureBilling',
    value: function captureBilling(_ref, token) {
      var _this2 = this;

      var id = _ref.id;

      var headers = {
        'Content-Type': 'application/json'
      };
      return (0, _get3.default)(Order.prototype.__proto__ || (0, _getPrototypeOf2.default)(Order.prototype), 'post', this).call(this, this.routes.CAPTURE_BILLING(this.name, id), {
        body: this.toJson({
          token: token
        }),
        headers: headers
      }).then(function (json) {
        return json.result || json[_this2.one];
      });
    }
  }, {
    key: 'getByKey',
    value: function getByKey(_ref2) {
      var _this3 = this;

      var id = _ref2.id,
          key = _ref2.key;

      var headers = {
        'Content-Type': 'application/json'
      };
      return (0, _get3.default)(Order.prototype.__proto__ || (0, _getPrototypeOf2.default)(Order.prototype), 'get', this).call(this, this.routes.GET_ORDER_BY_KEY(this.name, id, key), {
        headers: headers
      }).then(function (json) {
        return json.result || json[_this3.one];
      });
    }
  }, {
    key: 'updateStatus',
    value: function updateStatus(_ref3, status) {
      var _this4 = this;

      var id = _ref3.id;

      var headers = {
        'Content-Type': 'application/json'
      };
      return (0, _get3.default)(Order.prototype.__proto__ || (0, _getPrototypeOf2.default)(Order.prototype), 'post', this).call(this, this.routes.UPDATE_STATUS(this.name, id, status), {
        headers: headers
      }).then(function (json) {
        return json.result || json[_this4.one];
      });
    }
  }]);
  return Order;
}(_base2.default);

exports.default = Order;