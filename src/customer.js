import CrudApi from './base';

export default class Customer extends CrudApi {
  constructor() {
    super('customer');

    if (Customer.prototype.singleton) {
      return Customer.prototype.singleton;
    }
    Customer.prototype.singleton = this;

    return this;
  }
}
