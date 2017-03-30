// @flow
import CrudApi from './base';

let singleton : any = null;

export default class Customer extends CrudApi {
  constructor() {
    super('customer');

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return this;
  }
}
