import Fetchable from './fetchable';

let singleton = null;

export default class Report extends Fetchable {
  constructor() {
    super();

    if (singleton) {
      return singleton;
    }
    singleton = this;

    return singleton;
  }

  dashboard() {
    const body = new URLSearchParams();

    return super.get(`/api/v1/reports/dashboard?${body}`)
      .then(json => json.result);
  }

  salesByProduct(groupBy, productId) {
    const body = new URLSearchParams();
    body.set('groupBy', groupBy);
    body.set('productId', productId);

    return super.get(`/api/v1/reports/salesByProduct?${body}`)
      .then(json => json.report);
  }

  salesByTotal(groupBy) {
    const body = new URLSearchParams();
    body.set('groupBy', groupBy);

    return super.get(`/api/v1/reports/salesByTotal?${body}`)
      .then(json => json.report);
  }

  salesByUser(userId) {
    return super.get(`/api/v1/reports/scalar/salesByUser?userId=${userId}`)
      .then(json => json.report);
  }

  revenueByUser(userId) {
    return super.get(`/api/v1/reports/scalar/revenueByUser?userId=${userId}`)
      .then(json => json.result);
  }

  listingsByUser(userId) {
    return super.get(`/api/v1/reports/scalar/listingsByUser?userId=${userId}`)
      .then(json => json.result);
  }

  salesByVendor(groupBy, vendorId) {
    const body = new URLSearchParams();
    body.set('groupBy', groupBy);
    body.set('vendorId', vendorId);

    return super.get(`/api/v1/reports/salesByVendor?${body}`)
      .then(json => json.result);
  }

  inventoryShippedByUser(userId) {
    return super.get(`/api/v1/reports/scalar/shippedByUser?userId=${userId}`)
      .then(json => json.result);
  }

  inventoryReceivedByUser(userId) {
    return super.get(`/api/v1/reports/scalar/receivedByUser?userId=${userId}`)
      .then(json => json.result);
  }
}
