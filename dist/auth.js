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

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = function (_Fetchable) {
  (0, _inherits3.default)(Auth, _Fetchable);

  function Auth() {
    var _ret2;

    (0, _classCallCheck3.default)(this, Auth);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Auth.__proto__ || (0, _getPrototypeOf2.default)(Auth)).call(this));

    if (Auth.prototype.singleton) {
      var _ret;

      return _ret = Auth.prototype.singleton, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    Auth.prototype.singleton = _this;

    return _ret2 = _this, (0, _possibleConstructorReturn3.default)(_this, _ret2);
  }

  (0, _createClass3.default)(Auth, [{
    key: 'register',
    value: function register(username, password, email, firstName, lastName) {
      var _this2 = this;

      return (0, _get3.default)(Auth.prototype.__proto__ || (0, _getPrototypeOf2.default)(Auth.prototype), 'post', this).call(this, '/register', {
        body: this.toForm({
          username: username,
          password: password,
          email: email,
          firstName: firstName,
          lastName: lastName
        })
      }).then(function (json) {
        return _this2.setUser(json);
      });
    }
  }, {
    key: 'login',
    value: function login(username, password) {
      var _this3 = this;

      return (0, _get3.default)(Auth.prototype.__proto__ || (0, _getPrototypeOf2.default)(Auth.prototype), 'post', this).call(this, '/auth/credentials', {
        body: this.toForm({
          username: username,
          password: password
        })
      }).then(function (json) {
        return _this3.setUser(json);
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      return (0, _get3.default)(Auth.prototype.__proto__ || (0, _getPrototypeOf2.default)(Auth.prototype), 'delete', this).call(this, '/auth/credentials');
    }
  }, {
    key: 'setUser',
    value: function setUser(response) {
      var isAuthenticated = !!response.sessionId;
      var user = {
        isAuthenticated: isAuthenticated
      };

      if (isAuthenticated) {
        user.userName = response.userName;
        user.sessionId = response.sessionId;
        user.userId = response.userId;
      }
      return user;
    }
  }, {
    key: 'profile',
    value: function profile() {
      return (0, _get3.default)(Auth.prototype.__proto__ || (0, _getPrototypeOf2.default)(Auth.prototype), 'get', this).call(this, '/api/v1/me').then(function (json) {
        return json.result;
      });
    }
  }, {
    key: 'forgotPassword',
    value: function forgotPassword(email) {
      return (0, _get3.default)(Auth.prototype.__proto__ || (0, _getPrototypeOf2.default)(Auth.prototype), 'post', this).call(this, '/api/v1/password/forgot', {
        body: this.toForm({
          email: email
        })
      }).then(function (json) {
        return json;
      });
    }
  }, {
    key: 'resetPassword',
    value: function resetPassword(email, token, password, passwordRepeat) {
      return (0, _get3.default)(Auth.prototype.__proto__ || (0, _getPrototypeOf2.default)(Auth.prototype), 'post', this).call(this, '/api/v1/password/reset', {
        body: this.toForm({
          email: email,
          token: token,
          password: password,
          passwordRepeat: passwordRepeat
        })
      });
    }
  }]);
  return Auth;
}(_fetchable2.default);

exports.default = Auth;