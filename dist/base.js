'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _fetchable = require('./fetchable');

var _fetchable2 = _interopRequireDefault(_fetchable);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_lodash2.default.mixin(_lodashInflection2.default);

var t = _constants2.default.apiTemplates;

var CrudApi = function (_Fetchable) {
  (0, _inherits3.default)(CrudApi, _Fetchable);

  function CrudApi(name) {
    var routes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var apiRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://inventory-api-pro.azurewebsites.net';
    (0, _classCallCheck3.default)(this, CrudApi);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CrudApi.__proto__ || (0, _getPrototypeOf2.default)(CrudApi)).call(this, _constants2.default.API_ROOT, store));

    _this.routes = _lodash2.default.merge(t, routes);
    _this.name = name;
    _this.one = (0, _lodash2.default)(name).singularize().toLower();
    _this.many = (0, _lodash2.default)(name).pluralize().toLower();
    return _this;
  }

  (0, _createClass3.default)(CrudApi, [{
    key: 'count',
    value: function count() {
      var includeDeleted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var body = new URLSearchParams();
      body.set('includeDeleted', includeDeleted);

      return (0, _get3.default)(CrudApi.prototype.__proto__ || (0, _getPrototypeOf2.default)(CrudApi.prototype), 'get', this).call(this, this.routes.COUNT(this.name) + '?' + body).then(function (json) {
        return json.result;
      });
    }
  }, {
    key: 'list',
    value: function list() {
      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var _this2 = this;

      var take = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
      var includeDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var body = new URLSearchParams();
      body.set('skip', skip);

      body.set('includeDeleted', includeDeleted);

      return (0, _get3.default)(CrudApi.prototype.__proto__ || (0, _getPrototypeOf2.default)(CrudApi.prototype), 'get', this).call(this, this.routes.LIST(this.name) + '?' + body).then(function (json) {
        return json.result || json[_this2.many];
      });
    }
  }, {
    key: 'single',
    value: function single(id) {
      var _this3 = this;

      var includeDeleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var body = new URLSearchParams();
      body.set('includeDeleted', includeDeleted);

      return (0, _get3.default)(CrudApi.prototype.__proto__ || (0, _getPrototypeOf2.default)(CrudApi.prototype), 'get', this).call(this, this.routes.SINGLE(this.name) + '/' + id + '?' + body).then(function (json) {
        return json.result || json[_this3.one];
      });
    }
  }, {
    key: 'typeahead',
    value: function typeahead(query) {
      var includeDeleted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var body = new URLSearchParams();
      body.set('query', query);
      body.set('includeDeleted', includeDeleted);

      return (0, _get3.default)(CrudApi.prototype.__proto__ || (0, _getPrototypeOf2.default)(CrudApi.prototype), 'search', this).call(this, this.routes.TYPEAHEAD(this.name) + '?' + body).then(function (json) {
        return json.result;
      });
    }
  }, {
    key: 'save',
    value: function save(thing) {
      var _this4 = this;

      var id = thing.id;
      var headers = {
        'Content-Type': 'application/json'
      };
      delete thing.id;

      return (0, _get3.default)(CrudApi.prototype.__proto__ || (0, _getPrototypeOf2.default)(CrudApi.prototype), 'put', this).call(this, this.routes.SAVE(this.name) + '/' + id, {
        body: this.toJson(thing),
        headers: headers
      }).then(function (json) {
        return json.result || json[_this4.one];
      });
    }
  }, {
    key: 'create',
    value: function create(thing) {
      var _this5 = this;

      var headers = {
        'Content-Type': 'application/json'
      };
      delete thing.id;
      return (0, _get3.default)(CrudApi.prototype.__proto__ || (0, _getPrototypeOf2.default)(CrudApi.prototype), 'post', this).call(this, this.routes.CREATE(this.name), {
        body: this.toJson(thing),
        headers: headers
      }).then(function (json) {
        return json.result || json[_this5.one];
      });
    }
  }, {
    key: 'createMany',
    value: function createMany(things) {
      var _this6 = this;

      var headers = {
        'Content-Type': 'application/json'
      };

      return (0, _get3.default)(CrudApi.prototype.__proto__ || (0, _getPrototypeOf2.default)(CrudApi.prototype), 'post', this).call(this, this.routes.CREATE_MANY(this.name), {
        body: this.toJson((0, _defineProperty3.default)({}, this.many, things)),
        headers: headers
      }).then(function (json) {
        return json.result || json[_this6.many];
      });
    }
  }, {
    key: 'delete',
    value: function _delete(id, rowVersion) {
      var _this7 = this;

      if (id < 1) {
        throw new Error('id must be >= 1');
      }
      if (rowVersion < 1) {
        throw new Error('rowVersion must be >= 1');
      }
      var body = new URLSearchParams();
      body.set('rowVersion', rowVersion);
      return (0, _get3.default)(CrudApi.prototype.__proto__ || (0, _getPrototypeOf2.default)(CrudApi.prototype), 'delete', this).call(this, this.routes.DELETE(this.name) + '/' + id + '?' + body).then(function (json) {
        return json.result || json[_this7.one];
      });
    }
  }]);
  return CrudApi;
}(_fetchable2.default);

exports.default = CrudApi;