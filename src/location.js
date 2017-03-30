// @flow
import CrudApi from './base';

let singleton : any = null;

export default class Location extends CrudApi {
  constructor() {
    super('location');

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }
}
