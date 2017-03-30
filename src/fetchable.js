//@flow

import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import getErrorCodeHandler from './errorCodes';
import Configuration from './configuration';

export default class Fetchable {
  baseUrl : string;
  fetch : Function;
  prepare : Function;

  constructor(baseUrl : string = Configuration.apiRoot, fetcher : Function = fetch) {
    if (!baseUrl || baseUrl === '') {
      throw new Error('baseUrl may not be empty');
    }
    this.baseUrl = baseUrl;
    this.fetch = fetcher || fetch;
  }

  request(verb: string, url : string, options : any = {}) : Promise < Object > {
    const opts = _.merge({}, options);
    opts.method = _(verb).toUpper();
    return this._fetch(url, this.prepare(opts));
  }

  get(url : string, options : any = {}) : Promise < Object > {
    return this.request('GET', url, options);
  }

  put(url : string, options : any = {}) : Promise < Object > {
    return this.request('PUT', url, options);
  }

  post(url : string, options : any = {}) : Promise < Object > {
    return this.request('POST', url, options);
  }

  patch(url : string, options : any = {}) : Promise < Object > {
    return this.request('PATCH', url, options);
  }

  // I think this flow error is due to the override in CrudApi changing the param types
  // $FlowFixMe
  delete(url : string, options : any = {}) : Promise < Object > {
    return this.request('DELETE', url, options);
  }

  search(url : string, options : any = {}) : Promise < Object > {
    return this.request('SEARCH', url, options);
  }

  deserialize(response : Object) : Promise < Object > {
    return response.json().then((json) => {
      return { json, response };
    }).catch((e) => {
      return { json: {}, error: e, response };
    });
  }

  _fetch(url : string, options : Object) {
    if (!url) {
      throw new Error('url may not be empty');
    }
    return this.fetch(this.baseUrl + url, options)
      .then(res => this.deserialize(res))
      .then((res) => {
        const { response, json } = res;
        getErrorCodeHandler({ response, json })();
        return json;
      });
  }

  toForm(body : Object) {
    const form = new FormData();
    _.each(body, (v, k) => {
      form.append(k, v);
    });
    return form;
  }

  toJson(body : Object) {
    return JSON.stringify(body);
  }

  prepareXhr(xhr : XMLHttpRequest) {
    const defaults = {
      headers: {
        Accept: 'application/json',
        Authorization: `${Configuration.getAuthorizationHeader()}`
      }
    };

    xhr.withCredentials = false;
    _.each(defaults.headers, (v, k) => {
      xhr.setRequestHeader(k, v);
    });
  }

  prepare(options : Object) {
    const defaults = {
      headers: {
        Accept: 'application/json',
        Authorization: `${Configuration.getAuthorizationHeader()}`
      }
    };
    options.headers = _.merge({}, defaults.headers, options.headers);
    options.credentials = 'omit';
    options.mode = 'cors';

    return options;
  }
}
