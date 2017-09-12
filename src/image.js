import CrudApi from './base';
import Configuration from './configuration';

let singleton;

export default class Image extends CrudApi {
  constructor() {
    super('image');

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }

  getImageUploadUrl() {
    return `${Configuration.apiRoot}/api/v1/images`;
  }

  imageUploadIntercept(file, xhr) {
    super.prepareXhr(xhr);
  }
}
