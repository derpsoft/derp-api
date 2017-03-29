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

var Product = function (_CrudApi) {
  (0, _inherits3.default)(Product, _CrudApi);

  function Product() {
    var _ret2;

    (0, _classCallCheck3.default)(this, Product);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Product.__proto__ || (0, _getPrototypeOf2.default)(Product)).call(this, 'product', {
      SEARCH: function SEARCH() {
        return '/api/v1/products/search';
      },
      GET_ONE_WITH_SKU: function GET_ONE_WITH_SKU(sku) {
        return '/api/v1/products/sku/' + sku;
      }
    }));

    if (Product.prototype.singleton) {
      var _ret;

      return _ret = Product.prototype.singleton, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    Product.prototype.singleton = _this;

    return _ret2 = _this, (0, _possibleConstructorReturn3.default)(_this, _ret2);
  }

  (0, _createClass3.default)(Product, [{
    key: 'singleBySku',
    value: function singleBySku(sku) {
      var includeDeleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return (0, _get3.default)(Product.prototype.__proto__ || (0, _getPrototypeOf2.default)(Product.prototype), 'get', this).call(this, this.routes.GET_ONE_WITH_SKU(sku) + '?includeDeleted=' + includeDeleted).then(function (json) {
        return json.result;
      });
    }
  }, {
    key: 'imageUploadIntercept',
    value: function imageUploadIntercept(file, xhr) {
      (0, _get3.default)(Product.prototype.__proto__ || (0, _getPrototypeOf2.default)(Product.prototype), 'prepareXhr', this).call(this, xhr);
    }
  }, {
    key: 'getImageUploadUrl',
    value: function getImageUploadUrl(id) {
      if (id < 1) {
        throw new Error('id must be >= 1');
      }
      return _configuration2.default.apiRoot + '/api/v1/products/' + id + '/images';
    }
  }, {
    key: 'deleteImage',
    value: function deleteImage(productId, id) {
      if (productId < 1) {
        throw new Error('productId must be >= 1');
      }
      if (id < 1) {
        throw new Error('id must be >= 1');
      }
      return (0, _get3.default)(Product.prototype.__proto__ || (0, _getPrototypeOf2.default)(Product.prototype), 'delete', this).call(this, '/api/v1/products/' + productId + '/images/' + id).then(function (json) {
        return json.result;
      });
    }
  }]);
  return Product;
}(_base2.default);

exports.default = Product;