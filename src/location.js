import CrudApi from './base';

let singleton  = null;

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
