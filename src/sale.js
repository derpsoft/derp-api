import CrudApi from './base';

export default class Sale extends CrudApi {
  constructor() {
    super('sale');

    if (Sale.prototype.singleton) {
      return Sale.prototype.singleton;
    }
    Sale.prototype.singleton = this;

    return this;
  }
}
