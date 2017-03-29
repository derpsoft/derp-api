'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodashInflection = require('lodash-inflection');

var _lodashInflection2 = _interopRequireDefault(_lodashInflection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_lodash2.default.mixin(_lodashInflection2.default);

var constants = {
  apiTemplates: {
    COUNT: function COUNT(x) {
      return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower() + '/count';
    },
    CREATE: function CREATE(x) {
      return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower();
    },
    CREATE_MANY: function CREATE_MANY(x) {
      return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower() + '/import';
    },
    DELETE: function DELETE(x) {
      return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower();
    },
    LIST: function LIST(x) {
      return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower();
    },
    SAVE: function SAVE(x) {
      return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower();
    },
    SINGLE: function SINGLE(x) {
      return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower();
    },
    TYPEAHEAD: function TYPEAHEAD(x) {
      return '/api/v1/' + (0, _lodash2.default)(x).pluralize().toLower() + '/typeahead';
    }
  },

  add: function add(name) {
    if (constants[name]) {
      throw new Error('Adding ' + name + ' would overwrite existing constant.');
    }
    constants[name] = name;
  }
};

exports.default = constants;