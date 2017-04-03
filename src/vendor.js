// @flow
import CrudApi from './base';

let singleton : any = null;

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
