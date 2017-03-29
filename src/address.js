import CrudApi from './base';

export default class Address extends CrudApi {
  constructor() {
    super('address');

    if (Address.prototype.singleton) {
      return Address.prototype.singleton;
    }
    Address.prototype.singleton = this;

    return this;
  }
}
