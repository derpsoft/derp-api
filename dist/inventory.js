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

var Inventory = function (_Fetchable) {
  (0, _inherits3.default)(Inventory, _Fetchable);

  function Inventory() {
    (0, _classCallCheck3.default)(this, Inventory);
    return (0, _possibleConstructorReturn3.default)(this, (Inventory.__proto__ || (0, _getPrototypeOf2.default)(Inventory)).call(this));
  }

  (0, _createClass3.default)(Inventory, [{
    key: 'create',
    value: function create(_ref) {
      var locationId = _ref.locationId,
          productId = _ref.productId,
          quantity = _ref.quantity;

      if (quantity === 0) {
        throw new Error('quantity must be != 0');
      }
      var headers = {
        'Content-Type': 'application/json'
      };

      var xact = {
        locationId: locationId,
        productId: productId,
        quantity: quantity
      };
      return (0, _get3.default)(Inventory.prototype.__proto__ || (0, _getPrototypeOf2.default)(Inventory.prototype), 'post', this).call(this, '/api/v1/inventory-transactions', {
        body: this.toJson(xact),
        headers: headers
      });
    }
  }, {
    key: 'getLogs',
    value: function getLogs() {
      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var take = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;

      return (0, _get3.default)(Inventory.prototype.__proto__ || (0, _getPrototypeOf2.default)(Inventory.prototype), 'get', this).call(this, '/api/v1/inventory-transactions?skip=' + skip + '&take=' + take).then(function (json) {
        return json.result;
      });
    }
  }, {
    key: 'countLogs',
    value: function countLogs() {
      return (0, _get3.default)(Inventory.prototype.__proto__ || (0, _getPrototypeOf2.default)(Inventory.prototype), 'get', this).call(this, '/api/v1/inventory-transactions/count').then(function (json) {
        return json.result || json.count;
      });
    }
  }, {
    key: 'searchLogs',
    value: function searchLogs(query) {
      var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var take = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;

      var body = new URLSearchParams();
      body.set('skip', skip);
      body.set('take', take);
      body.set('query', query);

      return (0, _get3.default)(Inventory.prototype.__proto__ || (0, _getPrototypeOf2.default)(Inventory.prototype), 'get', this).call(this, '/api/v1/inventory-transactions/search?' + body);
    }
  }]);
  return Inventory;
}(_fetchable2.default);

exports.default = Inventory;