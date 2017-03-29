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

var _fetchable = require('./fetchable');

var _fetchable2 = _interopRequireDefault(_fetchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Report = function (_Fetchable) {
  (0, _inherits3.default)(Report, _Fetchable);

  function Report() {
    var _ret2;

    (0, _classCallCheck3.default)(this, Report);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Report.__proto__ || (0, _getPrototypeOf2.default)(Report)).call(this));

    if (Report.prototype.singleton) {
      var _ret;

      return _ret = Report.prototype.singleton, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    Report.prototype.singleton = _this;

    return _ret2 = _this, (0, _possibleConstructorReturn3.default)(_this, _ret2);
  }

  (0, _createClass3.default)(Report, [{
    key: 'dashboard',
    value: function dashboard() {
      var body = new URLSearchParams();

      return (0, _get3.default)(Report.prototype.__proto__ || (0, _getPrototypeOf2.default)(Report.prototype), 'get', this).call(this, '/api/v1/reports/dashboard?' + body).then(function (json) {
        return json.result;
      });
    }
  }, {
    key: 'salesByProduct',
    value: function salesByProduct(groupBy, productId) {
      var body = new URLSearchParams();
      body.set('groupBy', groupBy);
      body.set('productId', productId);

      return (0, _get3.default)(Report.prototype.__proto__ || (0, _getPrototypeOf2.default)(Report.prototype), 'get', this).call(this, '/api/v1/reports/salesByProduct?' + body).then(function (json) {
        return json.report;
      });
    }
  }, {
    key: 'salesByTotal',
    value: function salesByTotal(groupBy) {
      var body = new URLSearchParams();
      body.set('groupBy', groupBy);

      return (0, _get3.default)(Report.prototype.__proto__ || (0, _getPrototypeOf2.default)(Report.prototype), 'get', this).call(this, '/api/v1/reports/salesByTotal?' + body).then(function (json) {
        return json.report;
      });
    }
  }, {
    key: 'salesByVendor',
    value: function salesByVendor(groupBy, vendorId) {
      var body = new URLSearchParams();
      body.set('groupBy', groupBy);
      body.set('vendorId', vendorId);

      return (0, _get3.default)(Report.prototype.__proto__ || (0, _getPrototypeOf2.default)(Report.prototype), 'get', this).call(this, '/api/v1/reports/salesByVendor?' + body).then(function (json) {
        return json.report;
      });
    }
  }]);
  return Report;
}(_fetchable2.default);

exports.default = Report;