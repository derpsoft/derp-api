'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _errorCodes = require('./errorCodes');

var _errorCodes2 = _interopRequireDefault(_errorCodes);

var _configuration = require('./configuration');

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fetchable = function () {
  function Fetchable() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _configuration2.default.apiRoot;
    var fetcher = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _isomorphicFetch2.default;
    (0, _classCallCheck3.default)(this, Fetchable);

    if (!baseUrl || baseUrl === '') {
      throw new Error('baseUrl may not be empty');
    }
    this.baseUrl = baseUrl;
    this.fetch = fetcher;
  }

  (0, _createClass3.default)(Fetchable, [{
    key: 'request',
    value: function request(verb, url) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var opts = _lodash2.default.merge({}, options);
      opts.method = (0, _lodash2.default)(verb).toUpper();
      return this._fetch(url, this.prepare(opts));
    }
  }, {
    key: 'get',
    value: function get(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.request('GET', url, options);
    }
  }, {
    key: 'put',
    value: function put(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.request('PUT', url, options);
    }
  }, {
    key: 'post',
    value: function post(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.request('POST', url, options);
    }
  }, {
    key: 'patch',
    value: function patch(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.request('PATCH', url, options);
    }
  }, {
    key: 'delete',
    value: function _delete(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.request('DELETE', url, options);
    }
  }, {
    key: 'search',
    value: function search(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.request('SEARCH', url, options);
    }
  }, {
    key: 'deserialize',
    value: function deserialize(response) {
      return response.json().then(function (json) {
        return { json: json, response: response };
      }).catch(function (e) {
        return { json: {}, error: e, response: response };
      });
    }
  }, {
    key: '_fetch',
    value: function _fetch(url, options) {
      var _this = this;

      if (!url) {
        throw new Error('url may not be empty');
      }
      return this.fetch(this.baseUrl + url, options).then(function (res) {
        return _this.deserialize(res);
      }).then(function (res) {
        var response = res.response,
            json = res.json;

        (0, _errorCodes2.default)({ response: response, json: json })();
        return json;
      });
    }
  }, {
    key: 'toForm',
    value: function toForm(body) {
      var form = new FormData();
      _lodash2.default.each(body, function (v, k) {
        form.append(k, v);
      });
      return form;
    }
  }, {
    key: 'toJson',
    value: function toJson(body) {
      return (0, _stringify2.default)(body);
    }
  }, {
    key: 'prepareXhr',
    value: function prepareXhr(xhr) {
      var defaults = {
        headers: {
          Accept: 'application/json',
          Authorization: '' + _configuration2.default.getAuthorizationHeader()
        }
      };

      xhr.withCredentials = false;
      _lodash2.default.each(defaults.headers, function (v, k) {
        xhr.setRequestHeader(k, v);
      });
    }
  }, {
    key: 'prepare',
    value: function prepare(options) {
      var defaults = {
        headers: {
          Accept: 'application/json',
          Authorization: '' + _configuration2.default.getAuthorizationHeader()
        }
      };
      options.headers = _lodash2.default.merge({}, defaults.headers, options.headers);
      options.credentials = 'omit';
      options.mode = 'cors';

      return options;
    }
  }]);
  return Fetchable;
}();

exports.default = Fetchable;