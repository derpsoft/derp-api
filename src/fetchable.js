import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import getErrorCodeHandler from './errorCodes';
import Configuration from './configuration';

export default class Fetchable {
  baseUrl = ''
  fetch = null

  constructor(baseUrl = Configuration.apiRoot, fetcher = fetch) {
    if (!baseUrl || baseUrl === '') {
      throw new Error('baseUrl may not be empty');
    }
    this.baseUrl = baseUrl;
    this.fetch = fetcher || fetch;
  }

  request(verb, url, options = {}) {
    const opts = _.merge({}, options);
    opts.method = _(verb).toUpper();
    return this._fetch(url, this.prepare(opts));
  }

  get(url, options = {}) {
    return this.request('GET', url, options);
  }

  put(url, options = {}) {
    return this.request('PUT', url, options);
  }

  post(url, options = {}) {
    return this.request('POST', url, options);
  }

  patch(url, options = {}) {
    return this.request('PATCH', url, options);
  }

  // I think this flow error is due to the override in CrudApi changing the param types
  // $FlowFixMe
  delete(url, options = {}) {
    return this.request('DELETE', url, options);
  }

  search(url, options = {}) {
    return this.request('SEARCH', url, options);
  }

  deserialize(response) {
    if (response.ok) {
      return response.json().then((json) => {
        return {
          json,
          response
        };
      }).catch((e) => {
        return {
          json: {},
          error: e,
          response
        };
      });
    } else {
      return {
        json: {},
        response
      };
    }
  }

  _fetch(url, options) {
    if (!url) {
      throw new Error('url may not be empty');
    }
    return this.fetch(this.baseUrl + url, options)
      .then(response => this.deserialize(response))
      .then(({
        response,
        json
      }) => {
        getErrorCodeHandler(response)();
        return json;
      })
      .catch(e => getErrorCodeHandler(e)());
  }

  toForm(body) {
    const form = new FormData();
    _.each(body, (v, k) => {
      form.append(k, v);
    });
    return form;
  }

  toJson(body) {
    return JSON.stringify(body);
  }

  prepareXhr(xhr) {
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

  prepare(options) {
    const defaults = {
      headers: {
        Accept: 'application/json',
        Authorization: `${Configuration.getAuthorizationHeader()}`
      }
    };
    options.headers = _.merge({}, defaults.headers, options.headers);
    options.credentials = Configuration.fetch.credentials || 'omit';
    options.mode = Configuration.fetch.mode || 'no-cors';

    return options;
  }
}
