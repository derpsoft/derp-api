'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var singleton = null;

var Warehouse = function (_CrudApi) {
  (0, _inherits3.default)(Warehouse, _CrudApi);

  function Warehouse() {
    var _ret2;

    (0, _classCallCheck3.default)(this, Warehouse);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Warehouse.__proto__ || (0, _getPrototypeOf2.default)(Warehouse)).call(this, 'warehouse'));

    if (singleton) {
      var _ret;

      return _ret = singleton, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    singleton = _this;

    return _ret2 = singleton, (0, _possibleConstructorReturn3.default)(_this, _ret2);
  }

  return Warehouse;
}(_base2.default);

exports.default = Warehouse;