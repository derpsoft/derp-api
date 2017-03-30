// @flow
import CrudApi from './base';
import Configuration from './configuration';

let singleton : Image;

export default class Image extends CrudApi {
  constructor() {
    super('image');

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }

  getImageUploadUrl(): string {
    return `${Configuration.apiRoot}/api/v1/images`;
  }

  imageUploadIntercept(file: any, xhr: Object): void {
    super.prepareXhr(xhr);
  }
}
