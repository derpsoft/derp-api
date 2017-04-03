// @flow
import CrudApi from './base';

let singleton : any = null;

export default class User extends CrudApi {
  constructor() {
    super('user');

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }

  typeahead(query : string, includeDeleted : boolean = false) : Promise<Object> {
    const body : any = new URLSearchParams();
    body.set('query', query);
    body.set('includeDeleted', includeDeleted);

    return super
      .get(`${this.routes.TYPEAHEAD(this.name)}?${body}`)
      .then(json => json.result);
  }
}
