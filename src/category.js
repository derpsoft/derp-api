import CrudApi from './base';

export default class Category extends CrudApi {
  constructor() {
    super('category');

    if (Category.prototype.singleton) {
      return Category.prototype.singleton;
    }
    Category.prototype.singleton = this;

    return this;
  }
}
