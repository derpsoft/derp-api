import CrudApi from './base';

export default class User extends CrudApi {
  constructor() {
    super('user');

    if (User.prototype.singleton) {
      return User.prototype.singleton;
    }
    User.prototype.singleton = this;

    return this;
  }

  typeahead(query, includeDeleted = false) {
    const body = new URLSearchParams();
    body.set('query', query);
    body.set('includeDeleted', includeDeleted);

    return super
      .get(`${this.routes.TYPEAHEAD(this.name)}?${body}`)
      .then(json => json.result);
  }
}
