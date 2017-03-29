import Fetchable from './fetchable';

export default class Report extends Fetchable {
  constructor() {
    super();

    if (Report.prototype.singleton) {
      return Report.prototype.singleton;
    }
    Report.prototype.singleton = this;

    return this;
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

  salesByVendor(groupBy, vendorId) {
    const body = new URLSearchParams();
    body.set('groupBy', groupBy);
    body.set('vendorId', vendorId);

    return super.get(`/api/v1/reports/salesByVendor?${body}`)
      .then(json => json.report);
  }
}
