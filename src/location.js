import CrudApi from './base';

export default class Location extends CrudApi {
  constructor() {
    super('location');

    if (Location.prototype.singleton) {
      return Location.prototype.singleton;
    }
    Location.prototype.singleton = this;

    return this;
  }
}
