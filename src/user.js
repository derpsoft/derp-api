import CrudApi from './base';

let singleton  = null;

export default class User extends CrudApi {
  constructor() {
    super('user');

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }

  typeahead(query , includeDeleted  = false) {
    const body  = new URLSearchParams();
    body.set('query', query);
    body.set('includeDeleted', includeDeleted);

    return super
      .get(`${this.routes.TYPEAHEAD(this.name)}?${body}`)
      .then(json => json.result);
  }
}
