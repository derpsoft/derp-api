import _ from 'lodash';
import inflection from 'lodash-inflection';

_.mixin(inflection);

const constants = {
  apiTemplates: {
    COUNT: x => `/api/v1/${_(x).pluralize().toLower()}/count`,
    CREATE: x => `/api/v1/${_(x).pluralize().toLower()}`,
    CREATE_MANY: x => `/api/v1/${_(x).pluralize().toLower()}/import`,
    DELETE: x => `/api/v1/${_(x).pluralize().toLower()}`,
    LIST: x => `/api/v1/${_(x).pluralize().toLower()}`,
    SAVE: x => `/api/v1/${_(x).pluralize().toLower()}`,
    SINGLE: x => `/api/v1/${_(x).pluralize().toLower()}`,
    TYPEAHEAD: x => `/api/v1/${_(x).pluralize().toLower()}/typeahead`,
  },

  add(name) {
    if (constants[name]) {
      throw new Error(`Adding ${name} would overwrite existing constant.`);
    }
    constants[name] = name;
  },
};

export default constants;
