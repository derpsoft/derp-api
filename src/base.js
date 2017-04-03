// @flow

import _ from 'lodash';
import inflection from 'lodash-inflection';
import Fetchable from './fetchable';
import Constants from './constants';

_.mixin(inflection, {});

const t = Constants.apiTemplates;

export default class CrudApi extends Fetchable {
  routes : Object;
  name : string;
  one : string;
  many : string;

  constructor(name : string, routes : Object = {}) {
    super();

    this.routes = _.merge(t, routes);
    this.name = name;
    this.one = _(name).singularize().toLower();
    this.many = _(name).pluralize().toLower();
  }

  count(includeDeleted : boolean = false) : Promise<Object> {
    const body : any = new URLSearchParams();
    body.set('includeDeleted', includeDeleted);

    return super
      .get(`${this.routes.COUNT(this.name)}?${body}`)
      .then(json => json.result);
  }

  list(skip : number = 0, take : number = 25, includeDeleted : boolean = false) : Promise<Object> {
    const body : any = new URLSearchParams();
    body.set('skip', skip);
    // body.set('take', take);
    body.set('includeDeleted', includeDeleted);

    return super
      .get(`${this.routes.LIST(this.name)}?${body}`)
      .then(json => json.result || json[this.many]);
  }

  single(id : number, includeDeleted : boolean = false) : Promise<Object> {
    const body : any = new URLSearchParams();
    body.set('includeDeleted', includeDeleted);

    return super
      .get(`${this.routes.SINGLE(this.name)}/${id}?${body}`)
      .then(json => json.result || json[this.one]);
  }

  typeahead(query : string, includeDeleted : boolean = false) : Promise<Object> {
    const body : any = new URLSearchParams();
    body.set('query', query);
    body.set('includeDeleted', includeDeleted);

    return super
      .search(`${this.routes.TYPEAHEAD(this.name)}?${body}`)
      .then(json => json.result);
  }

  save(thing : Object) : Promise<Object> {
    const id = thing.id;
    const headers = {
      'Content-Type': 'application/json',
    };
    delete thing.id;

    return super
      .put(`${this.routes.SAVE(this.name)}/${id}`, {
        body: this.toJson(thing),
        headers
      })
      .then(json => json.result || json[this.one]);
  }

  create(thing : Object) : Promise<Object> {
    const headers = {
      'Content-Type': 'application/json',
    };
    delete thing.id;
    return super
      .post(this.routes.CREATE(this.name), {
        body: this.toJson(thing),
        headers
      })
      .then(json => json.result || json[this.one]);
  }

  createMany(things : Object) : Promise<Object> {
    const headers = {
      'Content-Type': 'application/json',
    };

    return super
      .post(this.routes.CREATE_MANY(this.name), {
        body: this.toJson({
          [this.many]: things
        }),
        headers
      })
      .then(json => json.result || json[this.many]);
  }

  delete(id : number, rowVersion : number) : Promise<Object> {
    if (id < 1) {
      throw new Error('id must be >= 1');
    }
    if (rowVersion < 1) {
      throw new Error('rowVersion must be >= 1');
    }
    const body : any = new URLSearchParams();
    body.set('rowVersion', rowVersion);
    return super
      .delete(`${this.routes.DELETE(this.name)}/${id}?${body}`)
      .then(json => json.result || json[this.one]);
  }
}
