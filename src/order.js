import _ from 'lodash';
import inflection from 'lodash-inflection';
import CrudApi from './base';

_.mixin(inflection);

let singleton  = null;

export default class Order extends CrudApi {
  constructor(routes = {}) {
    super('order', _.merge({}, {
      CAPTURE_BILLING: (x, id) => `/api/v1/${_(x).pluralize().toLower()}/${id}/billing`,
      UPDATE_STATUS: (x, id, status) => `/api/v1/${_(x).pluralize().toLower()}/${id}/${status}`,
      GET_ORDER_BY_KEY: (x, id, key) => `/api/v1/${_(x).pluralize().toLower()}/summary/${key}/${id}`,
    }, routes));

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }

  captureBilling({
    id
  }, token ) {
    const headers = {
      'Content-Type': 'application/json',
    };
    return super
      .post(this.routes.CAPTURE_BILLING(this.name, id), {
        body: this.toJson({
          token
        }),
        headers
      })
      .then(json => json.result || json[this.one]);
  }

  getByKey({
    id,
    key
  }) {
    const headers = {
      'Content-Type': 'application/json',
    };
    return super
      .get(this.routes.GET_ORDER_BY_KEY(this.name, id, key), {
        headers
      })
      .then(json => json.result || json[this.one]);
  }

  updateStatus({
    id
  }, status) {
    const headers = {
      'Content-Type': 'application/json',
    };
    return super
      .post(this.routes.UPDATE_STATUS(this.name, id, status), {
        headers
      })
      .then(json => json.result || json[this.one]);
  }
}
