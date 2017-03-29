import CrudApi from './base';
import Configuration from './configuration';

export default class Image extends CrudApi {
  constructor() {
    super('image');
  }

  getImageUploadUrl() {
    return `${Configuration.apiRoot}/api/v1/images`;
  }

  imageUploadIntercept(file, xhr) {
    super.prepareXhr(xhr);
  }
}
