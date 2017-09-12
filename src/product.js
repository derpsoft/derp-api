import CrudApi from './base';
import Configuration from './configuration';

let singleton  = null;

export default class Product extends CrudApi {
  constructor() {
    super('product', {
      SEARCH: () => '/api/v1/products/search',
      GET_ONE_WITH_SKU: sku => `/api/v1/products/sku/${sku}`,
    });

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }

  singleBySku(sku , includeDeleted  = false) {
    return super
      .get(`${this.routes.GET_ONE_WITH_SKU(sku)}?includeDeleted=${includeDeleted.toString()}`)
      .then(json => json.result);
  }

  imageUploadIntercept(file , xhr) {
    super.prepareXhr(xhr);
  }

  getImageUploadUrl(id ) {
    if (id < 1) {
      throw new Error('id must be >= 1');
    }
    return `${Configuration.apiRoot}/api/v1/products/${id}/images`;
  }

  deleteImage(productId , id ) {
    if (productId < 1) {
      throw new Error('productId must be >= 1');
    }
    if (id < 1) {
      throw new Error('id must be >= 1');
    }
    return super
      .request('DELETE', `/api/v1/products/${productId}/images/${id}`)
      .then(json => json.result);
  }
}
