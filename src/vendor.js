import CrudApi from './base';

export default class Vendor extends CrudApi {
  constructor() {
    super('vendor');

    if (Vendor.prototype.singleton) {
      return Vendor.prototype.singleton;
    }
    Vendor.prototype.singleton = this;

    return this;
  }
}
