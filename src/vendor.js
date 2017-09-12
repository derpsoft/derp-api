import CrudApi from './base';

let singleton  = null;

export default class Vendor extends CrudApi {
  constructor() {
    super('vendor');

    if (singleton) {
      return singleton;
    }

    singleton = this;

    return singleton;
  }
}
