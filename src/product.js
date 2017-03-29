import CrudApi from './base';
import Configuration from './configuration';

export default class Product extends CrudApi {
  constructor() {
    super('product', {
      SEARCH: () => '/api/v1/products/search',
      GET_ONE_WITH_SKU: sku => `/api/v1/products/sku/${sku}`,
    });

    if (Product.prototype.singleton) {
      return Product.prototype.singleton;
    }
    Product.prototype.singleton = this;

    return this;
  }

  singleBySku(sku, includeDeleted = false) {
    return super
      .get(`${this.routes.GET_ONE_WITH_SKU(sku)}?includeDeleted=${includeDeleted}`)
      .then(json => json.result);
  }

  imageUploadIntercept(file, xhr) {
    super.prepareXhr(xhr);
  }

  getImageUploadUrl(id) {
    if (id < 1) {
      throw new Error('id must be >= 1');
    }
    return `${Configuration.apiRoot}/api/v1/products/${id}/images`;
  }

  deleteImage(productId, id) {
    if (productId < 1) {
      throw new Error('productId must be >= 1');
    }
    if (id < 1) {
      throw new Error('id must be >= 1');
    }
    return super
      .delete(`/api/v1/products/${productId}/images/${id}`)
      .then(json => json.result);
  }
}
