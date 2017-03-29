// @flow

import CrudApi from './base';

let singleton : any = null;

export default class Warehouse extends CrudApi {
  constructor() {
    super('warehouse');

    if (singleton) {
      return singleton;
    }

    singleton = this;

    return singleton;
  }
}
