// @flow
import CrudApi from './base';

let singleton : any = null;

export default class Category extends CrudApi {
  constructor() {
    super('category');

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }
}
